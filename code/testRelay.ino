int relayPin = 18;
 
void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(115200);

}
 
void loop() {
  digitalWrite(relayPin, HIGH);
  Serial.println("ON");
  delay(200);
  digitalWrite(relayPin, LOW);
  Serial.println("OFF");
  delay(200);
}
