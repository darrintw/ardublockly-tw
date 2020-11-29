#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C I2CLCD( 0x3F, 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);

void setup() {
  I2CLCD.begin(16,2);
}

void loop() {
  I2CLCD.setCursor(0, 0);
  I2CLCD.print("Hello World");

}