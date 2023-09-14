'use strict';

goog.require('Blockly.Msg.en');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_SENSORS = 'Sensor';

/// Ultra Sonic
Blockly.Msg.BLOCKS_CATEGORY_ULTRASONIC_DISTANCE = "HC-SR04 Ultrasonic Distance sensor";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP = "Config Ultrasonic(HC-SR04) Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TIP = "";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG = "TRIG Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO = "ECHO Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM = "cm";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH = "inch";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE = "Ultrasonic return distence";

/// TRTC5000
Blockly.Msg.BLOCKS_CATEGORY_TCRT5000 = "Reflective Infrared Ssensor";
Blockly.Msg.ARD_TRTC5000_FROM = "Read Reflective Infrared Sensor value \u207B from ";
Blockly.Msg.ARD_TRTC5000_READ = "";
Blockly.Msg.ARD_TRTC5000_TIP = 'Only for TRTC5000. Value is reverse.';

// LOGIC NAN
Blockly.Msg.ARD_ISNAN_TITLE = "is nan?";
Blockly.Msg.ARD_ISNAN_TOOLTIP = "check value is nan or not";

/// DHT11
Blockly.Msg.BLOCKS_CATEGORY_DHT11 = "DHT11 temperature/humidity sensor";
Blockly.Msg.ARD_DHT11_READTEMP_FROM = "Read celsius temperature from DHT11 module at ";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = "";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "Read celsius temperature, -1 means error.";
Blockly.Msg.ARD_DHT11_READHUMI_FROM = "read relative humidity from DHT11 module at "
Blockly.Msg.ARD_DHT11_READHUMI_MSG = "";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "read relative humidity, -1 means error";

/// DS18B20
Blockly.Msg.BLOCKS_CATEGORY_DS18B20 = "DS18B20 temperature sensor";
Blockly.Msg.ARD_DS18B20_READTEMP_FROM = "read celsius temperature from DS18B20 module at ";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = "";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "Read celsius temperature, -1 means error.";

/// Photo Cells
Blockly.Msg.BLOCKS_CATEGORY_PHOTOCELLS = "Photocells";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM  = "";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG = "read light value from photocells";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP = "Read light value from photocells.";

/// LM35
Blockly.Msg.BLOCKS_CATEGORY_LM35 = "LM35 temperature sensor";
Blockly.Msg.ARD_LM35_READTEMP_FROM  = "";
Blockly.Msg.ARD_LM35_READTEMP_MSG = "read temperature from LM35 module at";
Blockly.Msg.ARD_LM35_READTEMP_TIP = "Read temperature from LM35 module.";

/// IR Reciver
Blockly.Msg.BLOCKS_CATEGORY_IRRECV = "IR reciver";
Blockly.Msg.ARD_IRRECV_SETUP = "setup IR reciver pin at ";
Blockly.Msg.ARD_IRRECV_SETUP_TIP = "";
Blockly.Msg.ARD_IRRECV_IR = "IR ";
Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG = " available from IR reciver?";
Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP = " available from IR reciver";
Blockly.Msg.ARD_IRRECV_READ_FROM = "";
Blockly.Msg.ARD_IRRECV_READ_MSG = "Read from IR reciver.";
Blockly.Msg.ARD_IRRECV_READ_TIP = "Read from IR reciver.";
Blockly.Msg.ARD_IRRECV_RESUME_FROM = "Resume ";
Blockly.Msg.ARD_IRRECV_RESUME_MSG = " IR reciver.";
Blockly.Msg.ARD_IRRECV_RESUME_TIP = "Resume IR reciver.";

/// HX711
Blockly.Msg.BLOCKS_CATEGORY_HX711 = "HX711 weight sensor"
Blockly.Msg.ARD_HX711_SETUP = "HX711 initial";
Blockly.Msg.ARD_HX711_TIP = "";
Blockly.Msg.ARD_HX711_DATA = "DATA pin";
Blockly.Msg.ARD_HX711_CLK = "CLK pin";
Blockly.Msg.ARD_HX711_SET_SCALE = "Set HX711 scale";
Blockly.Msg.ARD_HX711_TARE = "HX711 zero";
Blockly.Msg.ARD_HX711_GET_UNITS = "Get HX711 units ";
Blockly.Msg.ARD_HX711_GET_UNITS_AVERAGE = " times average";
Blockly.Msg.ARD_HX711_POWER_DOWN = "HX711 power down";
Blockly.Msg.ARD_HX711_POWER_UP = "HX711 power up";

//QMC5883L
Blockly.Msg.BLOCKS_CATEGORY_QMC5883L = "QMC5883L 3-Axis Magnetic Sensor";
Blockly.Msg.ARD_I2C_QMC5883L = "QMC5883L Sensor";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG1 = "Initial QMC5883L at address ";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG2 = "";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_TIP = "Initial I2C interface QMC5883L, Make sure the I2C address is correct.";
Blockly.Msg.ARD_I2C_QMC5883L_START_READ = "Start read";
Blockly.Msg.ARD_I2C_QMC5883L__READ_TIP = "Using QMC5583L series chip boards as a compass";
Blockly.Msg.ARD_I2C_QMC5883L_FROM = "From";
Blockly.Msg.ARD_I2C_QMC5883L_GET = "get";
Blockly.Msg.ARD_I2C_QMC5883L_SET = "set";
Blockly.Msg.ARD_I2C_QMC5883L_X = "X value";
Blockly.Msg.ARD_I2C_QMC5883L_Y = "Y value";
Blockly.Msg.ARD_I2C_QMC5883L_Z = "Z value";
Blockly.Msg.ARD_I2C_QMC5883L_XYZ_TIP = "To get the X, Y, or Z sensor readings, simply call the desired function.";
Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH = "Aziumth";
Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH_TIP = "To get the calculated azimuth (compass degree) value.";
Blockly.Msg.ARD_I2C_QMC5883L_BEARING = "Bearing";
Blockly.Msg.ARD_I2C_QMC5883L_BEARING_TIP = "To get a 16 point value of the direction the sensor.\n" +
    "This will divide the 360 range of the compass into 16 parts and return a value of 0-15 in clockwise order.\n" +
    " In this case 0 = N, 4 = E, 8 = S, 12 = W.";
Blockly.Msg.ARD_I2C_QMC5883L_ARRAY = "put into array"
Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION = "";
Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION_TIP = "To get a 16 point text representation of the direction the sensor.\n" +
    "This will produce a char array[3] with letters representing each direction.\n" +
    "Because we can't return an array we need to pass the values by reference.";
Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING = "Smoothing";
Blockly.Msg.ARD_I2C_QMC5883L_STEPS = "Smoothing steps";
Blockly.Msg.ARD_I2C_QMC5883L_ADVANCED = "remove min/max value?";
Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING_TIP = "STEPS : int, The number of steps to smooth the results by.\n" +
    "Valid 1 to 10. Higher steps equals more smoothing but longer process time.\n" +
    "ADVANCED : bool, True will remove the max and min values from each step and then process as normal.\n " +
    "Turning this feature on will results in even more smoothing but will take longer to process. ";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE = "Change QMC5883L Mode";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE_TIP = "You can also change the mode, sensitivity, sample rate and output rate of the QMC5583L chip.";
Blockly.Msg.ARD_I2C_QMC5883L_CONTROL = "Mode select";
Blockly.Msg.ARD_I2C_QMC5883L_DATA_RATE = "Data rate";
Blockly.Msg.ARD_I2C_QMC5883L_FULL_SCALE = "Full scale";
Blockly.Msg.ARD_I2C_QMC5883L_OVER_SAMPLE_RATIO = "Over sample ratio";

//MXA30100
Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG1 = "Enable MAX30100 at address ";
Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG2 = "";
Blockly.Msg.ARD_I2C_MAX30100_SETUP_TIP = "Enable I2C interface MAX30100. Make sure the I2C address is correct.";

//MLX90615
Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG1 = "Enable MLX90615 at address ";
Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG2 = "";
Blockly.Msg.ARD_I2C_MLX90615_SETUP_TIP = "Enable I2C interface MLX90615. Make sure the I2C address is correct.";
