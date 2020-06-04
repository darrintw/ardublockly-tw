# Ardublockly To-do List

This is a list of pending actions and features planned for Ardublockly. This is not to be taken strictly, and a lot of these might just be ideas rather than a roadmap.

If you would like to contribute to the projects these could be some good areas to look into. It would probably be a good idea to open an issue in the [GitHub issue tracker](https://github.com/carlosperate/ardublockly/issues) first to discuss if it's something worth doing and the best approach. 


## Ardublockly build system
- [ ] Create a single script to run all steps in a single command? (very low priority)

## Ardublockly desktop wrapper
- [ ] Wait for resolution and implement appData directory move fixes https://github.com/atom/electron/issues/2721
- [ ] Move Electron front end changes script from ardublockly html injection into preload script executed from Electron
- [ ] Add menu to directly select amongst the different Arduino boards supported
- [ ] Executable app signing
- [ ] Check for "built python server executable", if not found check if python is installed, if it is then run the server in a python sub-process.


## Python server
- [ ] Complete `compilerserttings` module unit test
- [ ] Complete `actions` module unit test module
- [ ] Check for more possible issues with unicode in Python 2
- [ ] Experiment with the `--preserve-temp-files` flag to maintain temporary files and speed up CLI compilation
- [ ] Remove tkinker file/directory selection and implement an html version
- [ ] The server should provide fully "headless" execution

#### Linux specific
- [ ] Test load sketch to board (current test in raspberry pi and ubuntu to load sketches in the IDE) with python 2 and 3
- [ ] Current port list shows all dev/tty, as all Arduinos should be connected by USB this list can be filtered to only show ttyUSBx ports

#### Mac OS X specific
- [ ] Test load sketch to board with python 2 and 3

#### Windows specific
- [ ] Nothing at the moment


## Ardublockly front end
- [ ] Change delete all icon with "new"
- [ ] Similar to Arduino IDE, select area to display button action text, and change the text with button mouse over
- [ ] Ensure that basic empty sketch code shows on page load
- [ ] On low resolutions ensure the blockly vertical height is lower than the viewport
- [ ] Finish Spanish translation


## Blockly
- [ ] Merge upstream changes until variables were reworked, ensure everything still works
- [ ] Merge upstream master with latest variable changes
- [ ] Type blocks are coming, ensure Ardublockly is ready
- [ ] Modify zoom icons to be smaller and placed in a different position
- [ ] Arduino setup and loop block can be copy/pasted using keyboard shorcuts, stop this from happening
- [ ] Refactor new variable name to be able to select custom name on single action and asynchronously

#### Blockly changes to submit upstream
- [ ] Any useful changes to the zoom functionality
- [ ] Use of window.prompt

#### Static typing
- [ ] logic_ternary block getType to defines type as that of its inputs
- [ ] logic_null block right now does not return a type, this might change
- [ ] math_number block 'errornumber' type used for debugging, remove
- [ ] math_arithmetic getType to check types of given inputs to decide between int or float. Right now first block within sets the type.
- [ ] math_constrain getType to check types of given inputs to decide between int or float. Right now first block within sets the type.
- [ ] math_number getType to use regular expressions more efficiently
- [ ] math_on_list to add static type if lists get implemented
- [ ] controls_for getVarType function
- [ ] controls_forEach block uses lists, these are not implemented in the Arduino generator (possible arrays), when implemented this block needs a getVarType, varType, and getType functions
- [ ] add getVarType to the procedures blocks
- [ ] the loops count type is set to int, user could input a decimal, so add input checking to determine type
- [ ] Number blocks automatically trim unnecessary decimal digits "x.0 => x", change this behaviour so that "x.0" can be set as a decimal

#### Arduino generator
- [ ] Text trim does not currently generate Arduino valid code

#### Arduino blocks
- [ ] Code generator for lists into arrays
- [ ] Create I2C communication blocks with hue 190
- [ ] Update the serial print block to specify explicit type (hex, str, int, etc)
- [ ] Look into all the serial functions and decide what else might fit in
- [ ] Allow to add return statement (to exit) inside the Arduino setup()/loop() functions


## Future features
- [ ] Server component of the block creator to add files into project directory folder and have client side to read them and include them into the toolbox
- [ ] Serial console for comms with Arduino
- [ ] Serial data graphing
- [ ] SVG image creation to displayed used pins with given function
- [ ] Auto updating desktop application
