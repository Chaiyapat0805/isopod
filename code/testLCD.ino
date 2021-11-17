#include "DHT.h"
#include <LiquidCrystal_I2C.h>
#include <Wire.h>

#define DHTPIN 23 //Pin ขาสำหรับ เสียบกับ Nodemcu
#define DHTTYPE DHT22   // DHT 22

DHT dht(DHTPIN, DHTTYPE);

LiquidCrystal_I2C lcd(0x27, 16, 2);


void setup() {
  // put your setup code here, to run once:

  Serial.begin(115200);

  
  dht.begin();

  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();

}

void loop() {
  // put your main code here, to run repeatedly:
  float humidity = dht.readHumidity(); // ดึงค่าความชื้น
  float temperature = dht.readTemperature(); // ดึงค่าอุณหภูมิ

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
