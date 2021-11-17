#include <WiFi.h>
#include <PubSubClient.h>
#include "DHT.h"
// Update these with values suitable for your network.

#define DHTPIN 23 //Pin ขาสำหรับ เสียบกับ Nodemcu
#define DHTTYPE DHT22   // DHT 22

const char* ssid = "Rsipenya";
const char* password = "12345678";
const char* mqtt_server = "203.154.83.69";

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE  (50)
char msg[MSG_BUFFER_SIZE];
int value = 0;

DHT dht(DHTPIN, DHTTYPE);

void setup_wifi() {

  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

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

void setup() {
  pinMode(BUILTIN_LED, OUTPUT);     // Initialize the BUILTIN_LED pin as an output
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {

  if (!client.connected()) {
    reconnect();
  }
  client.loop();

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

  //////////////////////////////////////////////
  
  //snprintf (msg, MSG_BUFFER_SIZE, "%d:%d:%d", );
  //Serial.print("Time: ");
  //Serial.println(msg);
  //client.publish("Mr.Isopod", msg);
    
  snprintf (msg, MSG_BUFFER_SIZE, "%d", humidity);
  Serial.print("humidity: ");
  Serial.println(msg);
  client.publish("CPE451/test/hum", msg);

  snprintf (msg, MSG_BUFFER_SIZE, "%d", temperature);
  Serial.print("temperature: ");
  Serial.println(msg);
  client.publish("temp", msg);

}
