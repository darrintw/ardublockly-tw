int music[] = {523, 523, 784, 784, 880, 880, 784};
int tempo[] = {1, 1, 1, 1, 1, 1, 2};
int i;
int mytime;

void setup() {
  pinMode(7, OUTPUT);

}

void loop() {
  for (i = 1; i <= 7; i++) {
    mytime = 1000 / tempo[i];
    tone(7,(music[i]));
    delay(mytime);
    noTone(7);
    delay((mytime * 0.3));
  }
}
