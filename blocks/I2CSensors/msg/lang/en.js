
'use strict';

goog.require('Blockly.Msg.en');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_I2CSensors = 'User Define Block';

/// Ardublockly name
Blockly.Msg.ARD_I2C_SCAN = 'Scan I2C Sensor address';
Blockly.Msg.ARD_I2C_HELP = "Scan sensors on I2C.";

//QMC5883L
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
