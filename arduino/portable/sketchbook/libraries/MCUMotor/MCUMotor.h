// Adafruit Motor shield library
// for ESP8266 NodeMCU 1.0 ESP12E

#ifndef _AFMotor_h_
#define _AFMotor_h_

#include <inttypes.h>
#if defined(ESP8266)
	/*
	Side D, 2*8P:
	D00=RX, not connected
	D01=TX, not connected
	D02=IO, not connected
	D03=D0, IO,SCL=GPIO16, to IC1 p09 (L293D)       =EN M2
	D04=D1, IO,SDA=GPIO05, to IC3 p11 (74HC595)     =SRCLK, MOTORCLK
	D05=D2, IO,SCK=GPIO04, to IC2 p01 (L293D)       =EN M4
	D06=D3, IO,MISO=GPIO00, to IC2 p09 (L293D)      =EN M3
	D07=D4, IO,MOSI=GPIO02, to IC3 p13 (74HC595)    =OE, MOTORENABLE
	D08=D5, IO,Pull-up=GPIO14, to IC3 p14 (74HC595) =SER, MOTORDATA
	D09=D6, IO,pull-up=GPIO12, to servo2 S-pin
	D10=x, IO,pull-down=, to servo1 S-pin
	D11=D7, MOSI=GPIO13, to IC1 p01 (L293D)         =EN M1
	D12=D8, MISO=GPIO15, to IC3 p12 (74HC595)       =RCLK, MOTORLATCH
	D13=SCK, not connected
	D14=GND
	D15= unused, not connected
	*/ 
  //#define MOTORDEBUG 1
  #include "stdlib_noniso.h"
  #define MICROSTEPS 8
  #define DC_MOTOR_PWM_RATE 5
  #define STEPPER1_PWM_RATE 5
  #define STEPPER2_PWM_RATE 5
  //logic pins for "PWM"
  #define MOTOR1_EN 13 //D7
  #define MOTOR2_EN 16 //D0
  #define MOTOR3_EN 0  //D3
  #define MOTOR4_EN 4  //D2
  #define SERVO_01 12  //D6
#endif

// Bit positions in the 74HCT595 shift register output
#define MOTOR1_A 2
#define MOTOR1_B 3
#define MOTOR2_A 1
#define MOTOR2_B 4
#define MOTOR3_A 5
#define MOTOR3_B 7
#define MOTOR4_A 0
#define MOTOR4_B 6

// Constants that the user passes in to the motor calls
#define FORWARD 1
#define BACKWARD 2
#define BRAKE 3
#define RELEASE 4

// Constants that the user passes in to the stepper calls
#define SINGLE 1
#define DOUBLE 2
#define INTERLEAVE 3
#define MICROSTEP 4

// Arduino pin names for interface to 74HCT595 latch
#define MOTORLATCH 15  //D8
#define MOTORCLK 5     //D1
#define MOTORENABLE 2  //D4
#define MOTORDATA 14   //D5

class AFMotorController
{
  public:
    AFMotorController(void);
    void enable(void);
    friend class AF_DCMotor;
    void latch_tx(void);
    uint8_t TimerInitalized;
};

class AF_DCMotor
{
 public:
  AF_DCMotor(uint8_t motornum, uint8_t freq = DC_MOTOR_PWM_RATE);
  void run(uint8_t);
  void setSpeed(uint8_t);

 private:
  uint8_t motornum, pwmfreq;
};

class AF_Stepper {
 public:
  AF_Stepper(uint16_t, uint8_t);
  void step(uint16_t steps, uint8_t dir,  uint8_t style = SINGLE);
  void setSpeed(uint16_t);
  uint8_t onestep(uint8_t dir, uint8_t style);
  void release(void);
  uint16_t revsteps; // # steps per revolution
  uint8_t steppernum;
  uint32_t usperstep, steppingcounter;
 private:
  uint8_t currentstep;

};

uint8_t getlatchstate(void);

#endif
