#include "DHT.h";
#include <WiFi.h> 
#include <WiFiClientSecure.h>

// shared variable
TaskHandle_t t0;
TaskHandle_t t1;

//connect wifi
const char* ssid = "RattanaHome";
const char* pass = "P@ssw0rdrtn";

#define DHTPIN 23 //Pin ขาสำหรับ เสียบกับ Nodemcu
#define DHTTYPE DHT22   // DHT 22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  // create a task to handle wifi (core 1)
  xTaskCreatePinnedToCore(
    tWifi,        /* Task function. */
    "Wifi",       /* name of task. */
    10000,        /* Stack size of task */
    NULL,         /* parameter of the task */
    1,            /* priority of the task */
    &t0,          /* Task handle to keep track of created task */
    1);           /* pin task to core 1 */
  delay(500);

  // create a task to handle dht22 (core 0)
  xTaskCreatePinnedToCore(
    tdhtFunc,     /* Task function. */
    "dht",        /* name of task. */
    10000,        /* Stack size of task */
    NULL,         /* parameter of the task */
    1,            /* priority of the task */
    &t1,          /* Task handle to keep track of created task */
    0);           /* pin task to core 0 */
  delay(500);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("loop running on core ");
  Serial.println(xPortGetCoreID());
  delay(1000);
}
void tWifi(){    
  delay(10);
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, pass); //ทำการ Connect SSID และ Pass
  
  while (WiFi.status() != WL_CONNECTED) { // ถ้าไม่สามารถเชื่อมต่อได้
  // ทำการ Print "Connectiong..." ทุก 1000ms
  Serial.println("Connecting...  ");  
  // แสดงสถานะการเชื่อมต่อ
  Serial.printf("Connection Status: %d\n", WiFi.status()); 
  delay(1000);
 }
 // จะหลุดออกจาก while ก็ต่อเมือ Connected เรียบร้อย
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void tdht(){
  dht.setup(2); // data pin 2
  dht.begin();
  
  delay(dht.getMinimumSamplingPeriod());
  float humidity = dht.getHumidity(); // ดึงค่าความชื้น
  float temperature = dht.getTemperature(); // ดึงค่าอุณหภูมิ

  if (isnan(h) || isnan(t) || isnan(f)) {
  Serial.println("Failed to read from DHT sensor!");
  return;
  }
  
  Serial.print(dht.getStatusString());
  Serial.print("\t");
  Serial.print(humidity, 1);
  Serial.print("\t\t");
  Serial.print(temperature, 1);
  Serial.print("\t\t");
  Serial.println(dht.toFahrenheit(temperature), 1);
  }
