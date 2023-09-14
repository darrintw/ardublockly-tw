/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview English strings for test blocks. All names have the postfix
 *     BLOCKS_{category} from the blocks_config.json data.
 */
'use strict';

goog.require('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_MOTORS = 'Motor';

/// Servo
Blockly.Msg.BLOCKS_CATEGORY_SERVO = "SERVO";
Blockly.Msg.ARD_SERVO_VAR = "SERVO variable";
Blockly.Msg.ARD_SERVO_ATTACH = "attach SERVO from Pin";
Blockly.Msg.ARD_SERVO_PIN = "Pin";
Blockly.Msg.ARD_SERVO_ATTACH_TIP = "attach servo from arduino Pin";
Blockly.Msg.ARD_SERVO_WRITE = "control SERVO %1";
Blockly.Msg.ARD_SERVO_WRITE_TO = "to";
Blockly.Msg.ARD_SERVO_WRITE_DEG = "degree";
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "Degrees (0~180)";
Blockly.Msg.ARD_SERVO_PWM = "Servo PWM ";
Blockly.Msg.ARD_SERVO_PWM_TO = " microseconds";
Blockly.Msg.ARD_SERVO_PWM_TIP = "Set Servo PWM microseconds";
Blockly.Msg.ARD_SERVO_DELAY = "every angle delay ";
Blockly.Msg.ARD_SERVO_SECOND = " micro second";
Blockly.Msg.ARD_SERVO_WRITE_TIP = "Set a Servo to an specified angle";
Blockly.Msg.ARD_SERVO_READ = "read SERVO from PIN#";
Blockly.Msg.ARD_SERVO_READ_TIP = "Read a Servo angle";
Blockly.Msg.ARD_SERVO_DETACH = "detach SERVO from Pin";
Blockly.Msg.ARD_SERVO_DETACH_TIP = "";

/// AFMotor
Blockly.Msg.BLOCKS_CATEGORY_AFMOTOR = 'L293D Motor';

Blockly.Msg.ARD_AFMOTOR = 'L293D Car';
Blockly.Msg.ARD_AFMOTOR_CONTROL = 'Command';
Blockly.Msg.ARD_AFMOTOR_FORWARD = 'Forward';
Blockly.Msg.ARD_AFMOTOR_BACKWARD = 'Backward';
Blockly.Msg.ARD_AFMOTOR_RELEASE = 'Stop';
Blockly.Msg.ARD_AFMOTOR_CHANNEL = 'AFMotor channel';
Blockly.Msg.ARD_AFMOTOR_SPEED = 'AFMotor speed';
Blockly.Msg.ARD_AFMOTOR_TIP = "";

/// Stepper
Blockly.Msg.BLOCKS_CATEGORY_STEPPERMOTOR = 'Stepper Motor';

Blockly.Msg.ARD_STEPPER = 'Stepper';
Blockly.Msg.ARD_STEPPER_SETUP_4PIN = "Stepper 4pin";
Blockly.Msg.ARD_STEPPER_PIN1 = "PIN1#";
Blockly.Msg.ARD_STEPPER_PIN2 = "PIN2#";
Blockly.Msg.ARD_STEPPER_PIN3 = "PIN3#";
Blockly.Msg.ARD_STEPPER_PIN4 = "PIN4#";
Blockly.Msg.ARD_STEPPPE_RREVOLUTION = 'steps per revolution';
Blockly.Msg.ARD_STEPPER_SET_SPEED = 'setSpeed';
Blockly.Msg.ARD_STEPPER_STEP = 'step';
Blockly.Msg.ARD_TOOLTIP_STEPPER_2PIN= 'Initialize two-pin stepper motor';
Blockly.Msg.ARD_TOOLTIP_STEPPER_4PIN= 'Initialize four-pin stepper motor';
Blockly.Msg.ARD_TOOLTIP_STEPPER_MOVE = 'Set the number of movement steps of the stepper motor';

// MotorDriverBoard
Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD = 'MotorDriverBoard';

/// Ardublockly name
Blockly.Msg.MOTORDRIVERBOARD_SETUP = "MotorDriverBoard Initialization";
Blockly.Msg.MOTORDRIVERBOARD_DCMOTOR = "DC Motor Interface";
Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTIONS = "direction";
Blockly.Msg.MOTORDRIVERBOARD_SPEED = "speed";
Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FIRST = "Interface 1";
Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_SECOND = "Interface 2";
Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_THIRD = "Interface 3";
Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FOURTH = "Interface 4";
Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_FORWARD = "Positive rotation";
Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_BACK = "Reversal";
Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_BRAKE = "Brake";
Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_RELEASE = "Release";
Blockly.Msg.MOTORDRIVERBOARD_STOPDCMOTOR = "Stop DC motor";
Blockly.Msg.MOTORDRIVERBOARD_ENMOTOR = "Coded Motor Interface";
Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_FIRST = "Interface 1";
Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_SECOND = "Interface 2";
Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_THIRD = "Interface 3";
Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_FOURTH = "Interface 4";
Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTIONS = "direction";
Blockly.Msg.MOTORDRIVERBOARD_ENDIMODE = "Drive Mode";
Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTION_FORWARD = "Positive rotation";
Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTION_BACK = "Reversal";
Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTION_BRAKE = "Brake";
Blockly.Msg.MOTORDRIVERBOARD_STEP = "Step";
Blockly.Msg.MOTORDRIVERBOARD_STOPENMOTOR = "Stop coding motor";
Blockly.Msg.MOTORDRIVERBOARD_STMOTOR = "Stepping Motor Interface";
Blockly.Msg.MOTORDRIVERBOARD_STDIRECTIONS = "direction";
Blockly.Msg.MOTORDRIVERBOARD_STEPS = "Step number";
Blockly.Msg.MOTORDRIVERBOARD_STEPS1 = "Motion step";
Blockly.Msg.MOTORDRIVERBOARD_STPORTS_FIRST = "Interface 1";
Blockly.Msg.MOTORDRIVERBOARD_STPORTS_SECOND = "Interface 2";
Blockly.Msg.MOTORDRIVERBOARD_STDIRECTION_FORWARD = "Positive rotation";
Blockly.Msg.MOTORDRIVERBOARD_STDIRECTION_BACK = "Reversal";
Blockly.Msg.MOTORDRIVERBOARD_STOPSTMOTOR = "Stop step motor";
Blockly.Msg.MOTORDRIVERBOARD_STDOUBLESINGLE = "Driven Single";
Blockly.Msg.MOTORDRIVERBOARD_STSINGLE = "Single";
Blockly.Msg.MOTORDRIVERBOARD_STDOUBLE = "Double";
Blockly.Msg.MOTORDRIVERBOARD_INTERLEAVE = "Half";
Blockly.Msg.MOTORDRIVERBOARD_MINFREQ = "RPM";
//Blockly.Msg.MOTORDRIVERBOARD_STYLE_INTERLEAVE = "staggered";

//Blockly.Msg.MOTORDRIVERBOARD_STYLE_MICROSTEP = "Micro step";

Blockly.Msg.MOTORDRIVERBOARD_SETRGB = "RGB lamp";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOUR = "colour";
Blockly.Msg.MOTORDRIVERBOARD_RGBNUMBER_ALL = "all";
Blockly.Msg.MOTORDRIVERBOARD_RGBNUMBER_LEFT = "left";
Blockly.Msg.MOTORDRIVERBOARD_RGBNUMBER_RIGHT = "Right";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_RED = "red";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_GREEN = "green";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_BLUE = "blue";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_YELLOW = "yellow";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_PURPLE = "purple";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_WHITE = "white";
Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_OFF = "Extinguish";
Blockly.Msg.MOTORDRIVERBOARD_PLAYSOUNDS = "Play sound";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CONNECTED = "Connect";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_DISCONNECTED = "Disconnect";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_BUTTONPUSHED = "Button press";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE1 = "Mode 1";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE2 = "Mode 2";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE3 = "Mode 3";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SURPRISE = "surprised";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_OHOH = "oh";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_OHOH2 = "ohoh";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CUDDLY = "cuddly";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SLEEPING = "sleeping";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_HAPPY = "happy";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SUPERHAPPY = "superhappy";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SHORTHAPPY = "shorthappy";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SAD = "sad";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CONFUSED = "sonfused";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART1 = "fart 1";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART2 = "fart 2";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART3 = "fart 3";
Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_DIDI = "Di Di";
Blockly.Msg.MOTORDRIVERBOARD_INITULTRASONIC = "Ultrasound Initialization";
Blockly.Msg.MOTORDRIVERBOARD_READULTRASONICDISTANCE = "Reading Ultrasound Distance";
Blockly.Msg.MOTORDRIVERBOARD_INITIRREMOTE = "Initialization of Infrared Receiving";
Blockly.Msg.MOTORDRIVERBOARD_IFIRREMOTEPRESSED = "Ir key press";
Blockly.Msg.MOTORDRIVERBOARD_IRKEYPRESS = "emakefun Infrared remote control key press";
Blockly.Msg.MOTORDRIVERBOARD_IRKEYPRESS = "ordinary Infrared remote control key press";
Blockly.Msg.MOTORDRIVERBOARD_IRKEY_UP = "up";
Blockly.Msg.MOTORDRIVERBOARD_IRKEY_DOWN = "down";
Blockly.Msg.MOTORDRIVERBOARD_IRKEY_LEFT = "left";
Blockly.Msg.MOTORDRIVERBOARD_IRKEY_RIGHT = "right";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01 = "NRF24L01 initialization";

Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ADDRESS = "address";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATA = "NRF24L01 sends data";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01RECEIVEDATA = "NRF24L01 receive data";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ISNOTNULL = "NRF24L01 data is not empty";
Blockly.Msg.MOTORDRIVERBOARD_GETINITNRF24L01 = "Getting NRF24L01 data";
Blockly.Msg.MOTORDRIVERBOARD_PS2INIT = "PS2 Initialization";
Blockly.Msg.MOTORDRIVERBOARD_WHICHPS2KEYPRESSED = "PS2 key pressed";
Blockly.Msg.MOTORDRIVERBOARD_SETPS2VIBRATE = "Setting PS2 Rocker Vibration Value";
Blockly.Msg.MOTORDRIVERBOARD_PS2GETVALUE = "Get PS2 value";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYPRESS = "PS2 handle press";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_UP = "up";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_DOWN = "down";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_LEFT = "left";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_RIGHT = "right";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_TRIANGLE = "△";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CIRCLE = "○";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CROSS = "×";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SQUARE = "囗";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L1 = "Left 1";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L2 = "Left 2";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L3 = "Left 3";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R1 = "Right 1";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R2 = "Right 2";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R3 = "Right 3";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SELECT = "select";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_START = "start";
Blockly.Msg.MOTORDRIVERBOARD_PS2KEYUNPRESS = "ps2  loosened";
Blockly.Msg.MOTORDRIVERBOARD_PS2GETVIBRATE = "Getting Rocker Value";
Blockly.Msg.MOTORDRIVERBOARD_PS2GETVIBRATE2 = "Get rocker angle";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE2_L = "Left rocker";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE2_R = "Right rocker";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_LX = "Left lateral axis";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_LY = "Left vertical axis";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_RX = "Right horizontal axis";
Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_RY = "Right vertical axis";
Blockly.Msg.MOTORDRIVERBOARD_PS2STATUS = "Read PS2 status";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORT = "Steering gear interface";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FIRST = "Interface 1";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SECOND = "Interface 2";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_THIRD = "Interface 3";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FOURTH = "Interface 4";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FIVETH = "Interface 5";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SIXTH = "Interface 6";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SEVENTH = "Interface 7";
Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_EIGHTH = "Interface 8";
Blockly.Msg.MOTORDRIVERBOARD_ANGLE = "angle";
Blockly.Msg.MOTORDRIVERBOARD_RED = "red";
Blockly.Msg.MOTORDRIVERBOARD_GREEN = "green";
Blockly.Msg.MOTORDRIVERBOARD_BLUE = "blue";
Blockly.Msg.MOTORDRIVERBOARD_READDEGEREES = "Read the current steering angle";

Blockly.Msg.MOTORDRIVERBOARD_INITDCMOTOR = "DC motor initialization";
Blockly.Msg.MOTORDRIVERBOARD_INITENMOTOR = "Code motor initialization";
Blockly.Msg.MOTORDRIVERBOARD_INITSTMOTOR = "Stepper motor initialization";
Blockly.Msg.MOTORDRIVERBOARD_INITRGB = "RGB initialization";
Blockly.Msg.MOTORDRIVERBOARD_INITSOUNDS = "Buzzer initialization";
Blockly.Msg.MOTORDRIVERBOARD_INITSERVO = "Servo initialization Interface";

Blockly.Msg.MOTORDRIVERBOARD_M4INIT = "4WD initialization Motor Interface";
Blockly.Msg.MOTORDRIVERBOARD_LEFTFORWARD = "Left front";
Blockly.Msg.MOTORDRIVERBOARD_RIGHTFORWARD = "Right front";
Blockly.Msg.MOTORDRIVERBOARD_LEFTBACKWARD = "Left rear";
Blockly.Msg.MOTORDRIVERBOARD_RIGHTBACKWARD = "Right rear";
Blockly.Msg.MOTORDRIVERBOARD_M4GOFORWARD = "4WD car forward speed";
Blockly.Msg.MOTORDRIVERBOARD_M4BACKFORWARD = "4WD car back speed";
Blockly.Msg.MOTORDRIVERBOARD_M4TURNLEFT = "4WD car turn left speed";
Blockly.Msg.MOTORDRIVERBOARD_M4TURNRIGHT = "4WD car turn right speed";
Blockly.Msg.MOTORDRIVERBOARD_M4TURNLEFTS = "4WD car Left spin speed";
Blockly.Msg.MOTORDRIVERBOARD_M4TURNRIGHTS = "4WD car Right spin speed";
Blockly.Msg.MOTORDRIVERBOARD_M4GODEGREE = "4WD car Driving angle";
Blockly.Msg.MOTORDRIVERBOARD_M4GOSPEED = "speed";
Blockly.Msg.MOTORDRIVERBOARD_M4STOP = "4WD car stop";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHINIT = "Bluetooth initialization";
Blockly.Msg.MOTORDRIVERBOARD_RECEIVEDATA = "Receive Bluetooth data";
Blockly.Msg.MOTORDRIVERBOARD_RECEIVEDDDATA = "Bluetooth data received";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHPRESS = "Bluetooth operation key press";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE = "Bluetooth data type";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_BUTTONS = "Key";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_DIRECTIONS = "angle";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_SPEEDS = "speed";
Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHGETDEGREE = "Bluetooth acquisition angle";

Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHGETSPEED = "Speed of Bluetooth acquisition";
Blockly.Msg.MOTORDRIVERBOARD_NRFINIT = "NRF24L01 + initialization address";
Blockly.Msg.MOTORDRIVERBOARD_NRFDATAREADY = "nRF24L01+Data received";
Blockly.Msg.MOTORDRIVERBOARD_NRFVALUE = "Define an array to receive NRF data";
Blockly.Msg.MOTORDRIVERBOARD_NRFGETDATA = "Read nRF24L01 + data";
Blockly.Msg.MOTORDRIVERBOARD_NRFGETPACKAGE = "Receive and read nRF24L01 + wireless handle data";
Blockly.Msg.MOTORDRIVERBOARD_NRFNEWOB = "Create NRF data type object";
Blockly.Msg.MOTORDRIVERBOARD_NRFDATAFUN = "Get the data type of nRF24L01 + wireless handle received and read";
Blockly.Msg.MOTORDRIVERBOARD_NRFDIRECTION = "direction";
Blockly.Msg.MOTORDRIVERBOARD_NRFSPEED = "speed";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTON = "Key";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONS = "Wireless handle key press";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSL1 = "left1";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSR1 = "right1";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSUP = "up";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSDOWN = "down";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSLEFT = "left";
Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSRIGHT = "right";
Blockly.Msg.MOTORDRIVERBOARD_NRFGETDEGREE = "nRF24L01+ get angle";
Blockly.Msg.MOTORDRIVERBOARD_NRFGETSPEED = "nRF24L01+ get speed";
Blockly.Msg.MOTORDRIVERBOARD_SETRGBBRIGHTNESS = "Set RGB light brightness（0~255）";
Blockly.Msg.MOTORDRIVERBOARD_RGBBRIGHTNESSS = "Brightness（0~255）";

Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATA = "Initial nRF24L01+";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01CHANNEL = "Channel";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01DATA = "data";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01DATA2 = "receive data";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATASS = "nRF24L01+ send data";
Blockly.Msg.MOTORDRIVERBOARD_NRFISSEND = "nRF24L01+ send data succefull?";
Blockly.Msg.MOTORDRIVERBOARD_NRFREADYDATA = "nRF24L01+ receive data?";
Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01RECDATASSS = "nRF24L01+ receive data";

Blockly.Msg.MOTORDRIVERBOARD_GPIO = "MotorDriverBoard control IO port";
Blockly.Msg.MOTORDRIVERBOARD_GPIOMODE = "Set";
Blockly.Msg.MOTORDRIVERBOARD_GPIOHIGH = "High";
Blockly.Msg.MOTORDRIVERBOARD_GPIOLOW = "Low";
Blockly.Msg.MOTORDRIVERBOARD_GPIOPWM = "Output PWM value(0-4096)";
Blockly.Msg.MOTORDRIVERBOARD_GPIOFREQ = "Seet IO frequence(1-1600HZ)";
