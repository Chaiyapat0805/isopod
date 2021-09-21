#include "DHT.h"
#include "WiFi.h"
#include <LiquidCrystal_I2C.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>

//connect wifi
const char* ssid = "Username";
const char* pass = "Password";

#define DHTPIN  //Pin ขาสำหรับ เสียบกับ Nodemcu

LiquidCrystal_I2C lcd(0x27, 16, 2);  //Module IIC/I2C Interface บางรุ่นอาจจะใช้ 0x3f

//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22

DHT dht;

void setup() {
  //check connect 
  Serial.begin(115200); 
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

   //MySQL Connection
  Serial.println("Connecting...");
  if (conn.connect(server_addr, 3306, dbuser, dbpassword)) {
    delay(1000);
    Serial.println("MySQL Connected.");
  }
  else
    Serial.println("Connection failed.");
  //conn.close();
  
}
  
  // test
  Serial.begin(9600);
  Serial.println();
  Serial.println("Status\tHumidity (%)\tTemperature (C)\t(F)");
  
  pinMode(1, OUTPUT);   //พัดลม
  pinMode(2, OUTPUT);  //ที่ฉีดละออง
  
  dht.setup(2); // data pin 2
  
  digitalWrite( 1, LOW);
  digitalWrite( 2, LOW);

  dht.begin();
  lcd.begin();
  lcd.backlight();


}

void loop() {
  
  Serial.printf("Connection Status: %d\n", WiFi.status());// แสดงสถานะการเชื่อมต่อ
  
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
  
  lcd.home();
  lcd.print("Temp : ");
  lcd.print(t);
  lcd.setCursor(0, 1);
  lcd.print("Humidity : ");
  lcd.print(t);
  lcd.print("%");



}
