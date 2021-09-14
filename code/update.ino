#include "DHT.h"
#include <ESP8266WiFi.h>

//connect wifi
const char* ssid = "Username";
const char* pass = "Password";

#define DHTPIN 

//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22

DHT dht;

void setup() {
  //check connect 
  Serial.begin(9600); //
  WiFi.begin(ssid, pass); //ทำการ Connect SSID และ Pass
  
  while (WiFi.status() != WL_CONNECTED) { // ถ้าไม่สามารถเชื่อมต่อได้
  // ทำการ Print "Connectiong..." ทุก 1000ms
  Serial.println("Connecting...  ");  
  // แสดงสถานะการเชื่อมต่อ
  Serial.printf("Connection Status: %d\n", WiFi.status()); 
  delay(1000);
  }
  // จะหลุดออกจาก while ก็ต่อเมือ Connected เรียบร้อย
  Serial.print("Wi-Fi connected."); 
  Serial.print("IP Address : ");
  Serial.println(WiFi.localIP());  // ทำการ Print IP ที่ได้รับมา 
  
  // test
  Serial.begin(9600);
  Serial.println();
  Serial.println("Status\tHumidity (%)\tTemperature (C)\t(F)");
  
  pinMode(1, OUTPUT);   //พัดลม
  pinMode(2, OUTPUT);  //ที่ฉีดละออง
  
  dht.setup(2); // data pin 2
  
  digitalWrite( 1, LOW);
  digitalWrite( 2, LOW);

}

void loop() {
  
  Serial.printf("Connection Status: %d\n", WiFi.status());// แสดงสถานะการเชื่อมต่อ

  delay(dht.getMinimumSamplingPeriod());
  float humidity = dht.getHumidity(); // ดึงค่าความชื้น
  float temperature = dht.getTemperature(); // ดึงค่าอุณหภูมิ
  Serial.print(dht.getStatusString());
  Serial.print("\t");
  Serial.print(humidity, 1);
  Serial.print("\t\t");
  Serial.print(temperature, 1);
  Serial.print("\t\t");
  Serial.println(dht.toFahrenheit(temperature), 1);
  delay(1000);

  if ( temperature <= 30 ) {
  digitalWrite(1 , LOW);
  digitalWrite(2, LOW);
  }
  else if ( temperature => 31 ) {
  digitalWrite(1 , HIGH);
  digitalWrite(2, LOW);
  }

  if ( humidity < 80 ) {
  digitalWrite(1 , LOW);
  digitalWrite(2, LOW);
  }
  else if ( humidity >= 81 ) {
  digitalWrite(1 , LOW);
  digitalWrite(2, HIGH);
  }


}
