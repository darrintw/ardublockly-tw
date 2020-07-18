#include <SoftwareSerial.h>
#include <Servo.h>
#include <AFMotor.h>

Servo servo_10;
Servo servo_9;
char c;

SoftwareSerial BT(A5, A4); //藍芽端接收腳對應Arduino傳送腳, 藍芽端傳送腳對應Arduino接收腳
AF_DCMotor motor_dc_2(2, MOTOR12_64KHZ);
AF_DCMotor motor_dc_3(3, MOTOR34_64KHZ);

// 描述此函數...
void orig() {
  servo_10.write(90);
  servo_9.write(90);
}

// 描述此函數...
void up() {
  servo_10.write((servo_10.read()) - 5);
}

// 描述此函數...
void down() {
  servo_10.write((servo_10.read()) + 5);
}

// 描述此函數...
void open() {
  servo_9.write((servo_9.read()) + 5);
}

// 描述此函數...
void close() {
  servo_9.write((servo_9.read()) - 5);
}

// 描述此函數...
void forward() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(FORWARD);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(FORWARD);
}

// 描述此函數...
void backward() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(BACKWARD);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(BACKWARD);
}

// 描述此函數...
void stop() {
  motor_dc_2.setSpeed(0);
  motor_dc_2.run(RELEASE);
  motor_dc_3.setSpeed(0);
  motor_dc_3.run(RELEASE);
}

// 描述此函數...
void left_turn_0() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(FORWARD);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(BACKWARD);
}

// 描述此函數...
void right_turn_0() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(BACKWARD);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(FORWARD);
}

// 描述此函數...
void left_turn_1() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(FORWARD);
  motor_dc_3.setSpeed(0);
  motor_dc_3.run(RELEASE);
}

// 描述此函數...
void right_turn_1() {
  motor_dc_2.setSpeed(0);
  motor_dc_2.run(RELEASE);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(FORWARD);
}

// 描述此函數...
void left_turn_2() {
  motor_dc_2.setSpeed(200);
  motor_dc_2.run(FORWARD);
  motor_dc_3.setSpeed(150);
  motor_dc_3.run(FORWARD);
}

// 描述此函數...
void right_turn_2() {
  motor_dc_2.setSpeed(150);
  motor_dc_2.run(FORWARD);
  motor_dc_3.setSpeed(200);
  motor_dc_3.run(FORWARD);
}


void setup() {
  BT.begin(9600);

  servo_10.attach(10);
  servo_9.attach(9);
  orig();

}

void loop() {
  if (BT.available()) {
    c = BT.read();
    if (c == 'w') {
      forward();
    } else if (c == 'x') {
      backward();
    } else if (c == 'a') {
      left_turn_0();
    } else if (c == 'd') {
      right_turn_0();
    } else if (c == 's') {
      stop();
    } else if (c == '0') {
      up();
    } else if (c == '1') {
      down();
    } else if (c == '2') {
      open();
    } else if (c == '3') {
      close();
    } else if (c == '8') {
      orig();
    }
  }

}