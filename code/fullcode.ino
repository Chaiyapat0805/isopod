#include "DHT.h"
#include <WiFi.h>
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#include <PubSubClient.h>
#include <ArduinoOTA.h>

//connect wifi
const char* ssid = "Rsipenya";
const char* pass = "12345678";

//mqtt
const char* mqtt_server = "203.154.83.69";

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE  (50)
char msg[MSG_BUFFER_SIZE];
int value = 0;

#define DHTPIN 23 //Pin ขาสำหรับ เสียบกับ Nodemcu
#define DHTTYPE DHT22   // DHT 22

DHT dht(DHTPIN, DHTTYPE);

LiquidCrystal_I2C lcd(0x27, 16, 2);

int fan = 19;
int frog = 18;

String statusfan;
String statusfrog;

void dht22(){
  int humidity = dht.readHumidity(); // ดึงค่าความชื้น
  int temperature = dht.readTemperature(); // ดึงค่าอุณหภูมิ

    if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  } 
  
  //////////////////////////////////
  // databese  

  snprintf (msg, MSG_BUFFER_SIZE, "%d", humidity);
  Serial.print("humidity: ");
  Serial.println(msg);
  client.publish("CPE451/test/hum", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "%d", temperature);
  Serial.print("temperature: ");
  Serial.println(msg);
  client.publish("CPE451/test/temp", msg);
  
  //////////////////////////////////
  
  // แสดงค่าอุณหภูมิ - ความชื้น
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  Serial.print("Temperature: : ");
  Serial.print(temperature);
  Serial.println(" C ");

  Serial.println("Check temperatrue & Check Humidty");
  Serial.println(".");
  // code การทำงานเมื่ออุณหภูมิสูงกว่ากำหนด
  if ( temperature <= 28 && humidity <= 70 ) {
  digitalWrite(fan , 1);
  digitalWrite(frog, 1);
  Serial.println("fan oFF");
  Serial.println("frog OFF");

  // database
  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfan);
  Serial.print("statusfan : ");
  Serial.println(msg);
  client.publish("", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfrog);
  Serial.print("statusfrog: ");
  Serial.println(msg);
  client.publish("", msg);
  }
  else if ( temperature >= 29 && humidity >= 71 ) {
  digitalWrite(fan , 0);
  digitalWrite(frog, 0);
  Serial.println("fan oN");
  Serial.println("frog ON");

  // database
  snprintf (msg, MSG_BUFFER_SIZE, "on", statusfan);
  Serial.print("statusfan : ");
  Serial.println(msg);
  client.publish("", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "on", statusfrog);
  Serial.print("statusfrog: ");
  Serial.println(msg);
  client.publish("", msg);
  }else if( temperature <= 28 && humidity >= 71 ){
  digitalWrite(fan , 1);
  digitalWrite(frog, 0);
  Serial.println("fan Off");
  Serial.println("frog ON");  

  // database
  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfan);
  Serial.print("statusfan : ");
  Serial.println(msg);
  client.publish("", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "on", statusfrog);
  Serial.print("statusfrog: ");
  Serial.println(msg);
  client.publish("", msg);
  }
  else if( temperature >= 29 && humidity <= 70 ){
  digitalWrite(fan , 0);
  digitalWrite(frog, 1);
  Serial.println("fan On");
  Serial.println("frog Off"); 

  // database
  snprintf (msg, MSG_BUFFER_SIZE, "on", statusfan);
  Serial.print("statusfan : ");
  Serial.println(msg);
  client.publish("", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfrog);
  Serial.print("statusfrog: ");
  Serial.println(msg);
  client.publish("", msg);
  }else{
  digitalWrite(fan , 1);
  digitalWrite(frog, 1);
  Serial.println("fan oFF");
  Serial.println("frog OFF");

  // database
  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfan);
  Serial.print("statusfan : ");
  Serial.println(msg);
  client.publish("", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "off", statusfrog);
  Serial.print("statusfrog: ");
  Serial.println(msg);
  client.publish("", msg);
    }
  delay(2000);
  Serial.println("////////////////////////////////////////////");  

  }
  
void setup_wifi() {

  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  // Switch on the LED if an 1 was received as first character
  if ((char)payload[0] == '1') {
    digitalWrite(BUILTIN_LED, LOW);   // Turn the LED on (Note that LOW is the voltage level
    // but actually the LED is on; this is because
    // it is active low on the ESP-01)
  } else {
    digitalWrite(BUILTIN_LED, HIGH);  // Turn the LED off by making the voltage HIGH
  }

}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("inTopic");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

  
void lcddht(){
  
  int humidity = dht.readHumidity(); // ดึงค่าความชื้น
  int temperature = dht.readTemperature(); // ดึงค่าอุณหภูมิ

    if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
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
   
void setup() {
  pinMode(BUILTIN_LED, OUTPUT);
  //แสดงค่าใน serial
  Serial.begin(115200);
  setup_wifi();
  Serial.println();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);

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

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  
  dht22();
  lcddht();
  
  client.loop();
 
  
}
