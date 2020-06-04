# Building Ardublockly

The package folder contains the [Electron][9] project and Python scripts required to package Ardublockly into a stand-alone executable. This way it can be distributed without any dependencies other than having the Arduino IDE.

The application can be categorised in three main components:
* Python server
* HTML/Javascript front end
* Desktop application wrapper (Electron).

The Python server is packaged into its own stand-alone executable using [PyInstaller][12].

The desktop wrapper is based on Electron, which uses node.js. The node.js component is only used where required for the application to integrate well with the individual desktop platforms. Originally the Chromium Embedded Framework Python bindings were used, but cross-platform maintenance proved to be problematic and Electron has provided a much smoother alternative.


## Continuous Integration Build Servers

Each commit to the [Ardublockly GitHub repository][1] triggers the build servers to follow all these build steps and upload the build output to an [online server][11] to make them available for download.

There is a CI Server for each platform (Windows, macOS, and Linux) with their own configuration script. So it could be useful to have a look at these scripts if some of the instructions here are not completely clear:

* Windows AppVeyor script: https://github.com/carlosperate/ardublockly/blob/master/.appveyor.yml
* macOS Travis script: https://github.com/carlosperate/ardublockly/blob/master/.travis.yml
* Linux CircleCI script: https://github.com/carlosperate/ardublockly/blob/master/circle.yml


## Ardublockly build dependencies

### Git
Git needs to be installed on the system and accessible through the command line interface.

### Python
The build scripts included in the `package` folder were originally developed and tested on Python 2.7, and later the build system was moved to use Python 3.4. Therefore, while these scripts should still be compatible with Python 2, in their current form they have only been tested on Python 3.

While the "core version" of Ardublockly (command line server + browser-based GUI) should be fully compatible with both Python 2 and 3 (tested on Python 2.7 and 3.4), there is one particular step in this build process that requires Python 2.7.

If you are using Python virtual environments on Windows this [collection of Python extensions binaries][2] is highly recommended.

The specific versions of the Python dependencies can be found in the [package/requirements.txt][3] file.

##### PyInstaller
Converts Python scripts into stand-alone executables. [PyInstaller][5] can be easily installed using pip:

```
 pip install pyinstaller
```

##### MkDocs
[MkDocs][6] is a static page generator specifically designed for documentation using Markdown.

The project documentation is written and hosted in the [Ardublockly GitHub Wiki][7]. The build script for the documentation pulls its markdown files and converts them into an HTML static site for offline access.

More information about this procedure can be found in [this article][8].

MkDocs can be easily installed using pip:

```
pip install MkDocs
```

### Node.js
Node.js is required to run [Electron][9]. It can be downloaded from the [official website][10].

The `npm` package manager should be included with node, which is used to deal with all the Electron application dependencies.


## Download the Source Code
Download and initialise this project repository:

```
git clone https://github.com/carlosperate/ardublockly.git
cd ardublockly
git submodule update --init --recursive
```

If you have already downloaded the Ardublockly source code, make sure the submodules have been initialised. The submodules in this repository are the 'closure-library' in the project root directory, and 'ardublockly.wiki' in the 'package/ardublocklydocs/' folder. You can run the last git command listed above, from the project root directory, to ensure the submodule directories are not empty.


## Build Instructions

### First step: Blockly
When Blockly is compiled, all the source code contained in the `blockly` folder is compressed in the `blockly/blockly_compressed.js`, `blockly/blocks_compressed.js`, and  `blockly/arduino_compressed.js` files (among others). The repository version of these compressed files might not be the most up-to-date, so the first step should be to compile Blockly to ensure the compressed files are up-to-date.  

You will need Python 2.7 for this step, as the Blockly build script is not currently compatible with Python 3. You will also need to be online, as the Google's "Closure Compiler Service" is used. From the project root directory:

```
cd blockly
python build.py
```

At this point, to continue with the next steps you'll have to go back to the project root directory:

```
cd ../
```

### Second step: Python server
To build the Python application all you have to do is execute the `build_pyinstaller.py` file from the project root directory. It is highly recommended to use Python 3 instead of Python 2 for this step:

```
python package/build_pyinstaller.py
```

The optional command line argument `linux`, `mac`, or `windows` can be provided, but the operating systems should be automatically detected.

This will remove any previous build directory, rebuild, and create any required launch script into the project root (`ardublockly_run.sh` on Linux, or `ardublockly_run.bat` on Windows).

### Third step: Electron
Execute the following commands from the project root directory:

```
cd package\electron
npm install
npm run release
```

The npm scripts will automatically detect and deal with the operating system different build requirements.

At this point, to continue with the next steps, it is recommended to go back to the project root directory:

```
cd ../../
```

### Fourth step: Documentation
Build the offline documentation by running the `build_docs.py` script from the project root directory (Python 3 recommended):

```
python package\build_docs.py
```

This will remove any previous build directory, rebuild it, and remove any temporary files.

### Final Step: Packing all Ardublockly
This step is only meant if you wish to pack the Ardublockly application into a distributable form. You can pack Ardublockly running the following command from the project root directory:

```
python package/pack_ardublockly.py
```

The pack script is designed for the build servers to zip the required contents into a single file to be uploaded to cloud storage, so it does not pack all the repository source code. This script creates a new folder on the same level as the project root, removes unnecessary files from this copied directory, and then zips it and saves it into the folder 'upload' within the original project root.


[1]: https://github.com/carlosperate/ardublockly
[2]: http://www.lfd.uci.edu/~gohlke/pythonlibs/
[3]: https://github.com/carlosperate/ardublockly/blob/master/package/requirements.txt
[4]: removed
[5]: http://www.pyinstaller.org
[6]: http://www.mkdocs.org
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: http://www.embeddedlog.com/static-docs-from-github-wiki.html
[9]: http://electron.atom.io
[10]: https://nodejs.org
[11]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/
[12]: http://www.pyinstaller.org
