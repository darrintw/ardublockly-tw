# FAQs
If you have any questions not covered here, please do not hesitate to open a new issue in the [Ardublockly repository issue tracker][1].

By reporting issues we can fix them and help you to resolve them, and it will also help other users in the same situation.

The FAQs are organised by: **Q**uestion, **A**nswer (the solution), **R**eason (an explanation).


## User FAQs

**Q: When I click on the settings field to change the compiler or to change the sketch location no file browser window opens and nothing happens.**

**A:** Check all the opened windows on your desktop environment to see if the file browser has been opened in the background.

**R:** Sometimes the file browser window is opened in the background and doesn't come into focus as expected.

***

**Q: I've correctly selected the Arduino IDE location in the settings, I can open the sketch in the Arduino IDE from Ardublockly, but it fails when I try to Verify or Upload the code.**

**A:** Try with the latest version of the Arduino IDE.

**R:** In most cases is recommended to use the latest version, as it is less likely to have bugs that could affect Ardublockly. You can also check the [Known Arduino IDE issues](Known-Arduino-IDE-issues) article, and if your are still experiencing problems, please report it in the [Ardublockly repository issue tracker][1].

### Windows Only
**Q: I don't see any/enough/expected data from the Arduino IDE/compiler in the "Arduino IDE output" box.**

**A:** Make sure you have selected the `arduino_debug.exe` file in the settings instead of `arduino.exe`.

**R:** On Windows the windowed programs (anthing that opens a window) cannot produce console output, so the Arduino IDE includes two `.exe` files, one for normal use and one to allow correct console support (which Ardublockly needs).

***

**Q: Every time I click on verify or upload code the Arduino splash screen appears momentarily.**

**A:** Make sure you have selected the `arduino_debug.exe` file in the settings instead of `arduino.exe`.

**R:** The splash screen is shown with the `arduino.exe` executable, but it isn't with the `arduino_debug.exe`.


## Developer FAQs

**Q: I have edited or created some blocks and followed the instructions to include them into Ardublockly, but I cannot see the changes.**

**A:** If you are using a web browser make sure you delete your cache and/or do a hard refresh.

If using the desktop application you can achieve this by deleting the folder `appdata`, located inside the `arduexec` folder.

**R:** This could happen if your browser, or the Ardublockly desktop application, is using the old cached files. Deleting the cache forces the browser/application to fetch the latest version of the files. 

***

**Q: I've got an error message saying "Error: Closure not found".**

**A:** Make sure you have initialised all git submodules as indicated in the "Download the Source Code" section from the [Building Ardublockly](Building-Ardublockly#download-the-source-code) document.

**R:** This could happen if you are trying to run or build the uncompressed version of Blockly and the `closure-library` folder hasn't been populated correctly. 

***

**Q: I'm having trouble trying to build Blockly.**

**A:** Make sure you are trying to build Blockly using Python 2.7.

**R:** The Blockly build script is only compatible with Python 2, and will likely fail with Python 3. You can find more info at the [Building Ardublockly](Building-Ardublockly#first-step-blockly) document.


[1]: https://github.com/carlosperate/ardublockly/issues