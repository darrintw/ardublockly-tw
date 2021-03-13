#include <Adafruit_NeoPixel.h>

int i;

Adafruit_NeoPixel strip_1 = Adafruit_NeoPixel(22, 0, NEO_GRB + NEO_KHZ800);

void setup() {

  strip_1.begin();
  strip_1.clear();
  strip_1.show();

}

void loop() {
  for (i = 0; i <= 21; i++) {
    strip_1.setPixelColor(i, strip_1.Color(255, 255, 255));
    strip_1.show();
    delay(1000);
  }
  delay(1000);
  for (i = 0; i <= 21; i++) {
    strip_1.setPixelColor(i, strip_1.Color(0, 0, 0));
    strip_1.show();
    delay(1000);
  }
  delay(1000);

}