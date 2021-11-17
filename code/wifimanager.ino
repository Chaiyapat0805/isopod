#include <WiFi.h>
#include <ESPmDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>
#include <WiFiManager.h> 
#include "DHT.h"
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#include "PubSubClient.h" // Connect and publish to the MQTT broker
#include <WiFiClientSecure.h>

TaskHandle_t Task0;
TaskHandle_t Task1;

#define DHTPIN 23 //Pin ขาสำหรับ เสียบกับ Nodemcu
#define DHTTYPE DHT22   // DHT 22

DHT dht(DHTPIN, DHTTYPE);

LiquidCrystal_I2C lcd(0x27, 16, 2);

int fan = 19;
int frog = 18;

void setup() {
    Serial.begin(115200); 
    
    //wifi
    WiFiManager wm;
    bool res;
    res = wm.autoConnect();
   if(!res) {
        Serial.println("Failed to connect");
    } 
    else {
        Serial.println("connected...");
    }

 //task 0 
  xTaskCreatePinnedToCore(
                    Task0,       /* Task function. */
                    "Task0",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task0,      /* Task handle to keep track of created task */
                    0);          /* pin task to core 0 */                  
  delay(500); 
   //task 1 
  xTaskCreatePinnedToCore(
                    Task1,       /* Task function. */
                    "Task1",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task1,      /* Task handle to keep track of created task */
                    1);          /* pin task to core 1 */
    delay(500); 
    
    // ส่วนของ OTA
    ArduinoOTA
    .onStart([]() {
      String type;
      if (ArduinoOTA.getCommand() == U_FLASH)
        type = "sketch";
      else          // แบบ U_SPIFFS
        type = "filesystem";
      Serial.println("Start updating " + type);
    })
    .onEnd([]() {
      Serial.println("\nEnd");
    })
    .onProgress([](unsigned int progress, unsigned int total) {
      Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
    })
    .onError([](ota_error_t error) {
      Serial.printf("Error[%u]: ", error);
      if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
      else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
      else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
      else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
      else if (error == OTA_END_ERROR) Serial.println("End Failed");
    });

  ArduinoOTA.begin();

  Serial.println("Ready");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  //output
  pinMode(fan, OUTPUT);  //รีเลย์พัดลม fan
  pinMode(frog, OUTPUT);  //รีเลย์ที่ฉีดละออง frog

  //lcd
  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();  

  //ตั้งสถานะไว้เป็น off
  digitalWrite( fan, LOW); 
  digitalWrite( frog, LOW);

  dht.begin();

}

void Task0( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());
 while (true) {
 ArduinoOTA.handle();
 
  // loop 
  int humidity = dht.readHumidity(); // ดึงค่าความชื้น
  int temperature = dht.readTemperature(); // ดึงค่าอุณหภูมิ

    if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // แสดงค่าอุณหภูมิ - ความชื้น
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  Serial.print("Temperature: : ");
  Serial.print(temperature);
  Serial.println(" C ");

  Serial.println("Check temperatrue");
  Serial.println(".");
  Serial.println(".");

  //แสดงอุณหภูมิผ่านจอ lcd
  lcd.home();
  lcd.print("Temp : ");
  lcd.print(temperature);
  lcd.print("C");
  lcd.setCursor(0, 1);
  lcd.print("Humidity :");
  lcd.print(humidity);
  lcd.print("%");
 }
}

void Task1( void * pvParameters ){
  Serial.print("Task2 running on core ");
  Serial.println(xPortGetCoreID());
 while (true) {
   
  // loop
  // code การทำงานเมื่ออุณหภูมิสูงกว่ากำหนด
  if ( temperature <= 31 ) {
  digitalWrite(fan , LOW);
  //digitalWrite(10, LOW);
  Serial.println("fan oFF");
  //Serial.println("frog OFF");
  }
  else if ( temperature >= 32 ) {
  digitalWrite(fan , HIGH);
  //digitalWrite(10, LOW);
  Serial.println("fan oN");
  //Serial.println("frog OFF");
  }
  Serial.println(".");
  Serial.println(".");

  Serial.println("Check Humidty");
  Serial.println(".");
  Serial.println(".");
  
  // code การทำงานเมื่อความชื้นต่ำกว่ากำหนด
  if ( humidity <= 60 ) {
  //digitalWrite(9 , LOW);
  digitalWrite(frog, LOW);
  //Serial.println("fan oFF");
  Serial.println("frog OFF");
  }
  else if ( humidity >= 61 ) {
  //digitalWrite(9 , LOW);
  digitalWrite(frog, HIGH);
  //Serial.println("fan oFF");
  Serial.println("frog ON");
  }
  Serial.println(".");
  Serial.println(".");
 }
}

void loop() {

}
