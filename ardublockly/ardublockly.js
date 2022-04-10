/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileOverview General javaScript for Arduino app with material design.
 */

'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};
Ardublockly.selectedboard = '';

/** Initialize function for Ardublockly, to be called on page load. */
Ardublockly.init = function () {
    /*var abc = getBroswer();
    console.log("broswer:" + abc.broswer + " version:" + abc.version);*/

    // Lang init must run first for the rest of the page to pick the right msgs
    Ardublockly.initLanguage();
    Ardublockly.addVersion();
    // Inject Blockly into content_blocks and fetch additional blocks
    Ardublockly.injectBlockly(document.getElementById('content_blocks'),
        Ardublockly.TOOLBOX_XML, '../blockly/');
    Ardublockly.importExtraBlocks();
    Ardublockly.addExtraCategories();

    Ardublockly.designJsInit();

    Ardublockly.bindDesignEventListeners();
    Ardublockly.bindActionFunctions();
    Ardublockly.bindBlocklyEventListeners();

    // Hackish way to check if not running locally
    if (document.location.hostname === 'localhost' || document.location.hostname === '127.0.0.1') {
        Ardublockly.initialiseIdeButtons();
        ArdublocklyServer.requestArduinoBoard(function (jsonObj) {
            Ardublockly.selectedboard = jsonObj['selected'];
            Ardublockly.changeBlocklyArduinoBoard(
                jsonObj['selected'].toLowerCase().replace(/ /g, '_'));
        });
        ArdublocklyServer.requestSerialPorts(function (jsonObj) {
            Ardublockly.setSerialPortsHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        document.getElementById('version_output').hidden = true;
    } else {
        document.getElementById('ide_buttons_wrapper').hidden = true;
        document.getElementById('button_serial_monitor').hidden = true;
        document.getElementById('ide_output').hidden = true;
    }

    window.oncontextmenu = (e) => {
        e.preventDefault();
    }

    Ardublockly.restoreDefault();
};

/** Change title and add version info to html title. */
Ardublockly.addVersion = function () {
    ArdublocklyServer.getVersionNumber(function (version) {
        if (version === null) return Ardublockly.openNotConnectedModal();
        var elId = document.getElementsByClassName("translatable_ardublocklyVersion");
        Array.prototype.forEach.call(elId, function (el) {
            el.textContent = "v" + version;
        });
    });
};

/** Binds functions to each of the buttons, nav links, and related. */
Ardublockly.bindActionFunctions = function () {
    // Navigation buttons
    Ardublockly.bindClick_('button_serial_monitor', Ardublockly.openSerialMonitor);
    Ardublockly.bindClick_('button_codeswitch', Ardublockly.codeSwitch);
    Ardublockly.bindClick_('button_examples', Ardublockly.openExamples);

    // Side menu buttons, they also close the side menu
    Ardublockly.bindClick_('menu_load_block', function () {
        Ardublockly.loadUserXmlFile();
        $('.button-collapse').sideNav('hide');
    });
    Ardublockly.bindClick_('menu_save_block', function () {
        Ardublockly.saveXmlFile();
        $('.button-collapse').sideNav('hide');
    });
    Ardublockly.bindClick_('menu_save_sketch', function () {
        Ardublockly.saveSketchFile();
        $('.button-collapse').sideNav('hide');
    });
    Ardublockly.bindClick_('menu_settings', function () {
        Ardublockly.openSettings();
        $('.button-collapse').sideNav('hide');
    });
    Ardublockly.bindClick_('menu_codeswitch', function () {
        Ardublockly.codeSwitch();
        $('.button-collapse').sideNav('hide');
    });

    // Floating buttons
    Ardublockly.bindClick_('button_ide_large', function () {
        Ardublockly.ideButtonLargeAction();
    });
    Ardublockly.bindClick_('button_ide_middle', function () {
        Ardublockly.ideButtonMiddleAction();
    });
    Ardublockly.bindClick_('button_load_xml', Ardublockly.XmlTextareaToBlocks);
    Ardublockly.bindClick_('button_toggle_toolbox', Ardublockly.toggleToolbox);

    // Settings modal input field listeners only if they can be edited
    var settingsPathInputListeners = function (elId, setValFunc, setHtmlCallback) {
        var el = document.getElementById(elId);
        if (el.readOnly === false) {
            // Event listener that send the data when the user presses 'Enter'
            el.onkeypress = function (e) {
                if (!e) { // noinspection JSDeprecatedSymbols
                    e = window.event;
                }
                // noinspection JSDeprecatedSymbols
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    setValFunc(el.value, function (jsonObj) {
                        setHtmlCallback(ArdublocklyServer.jsonToHtmlTextInput(jsonObj));
                    });
                    return false;
                }
            };
            // Event listener that send the data when moving out of the input field
            el.onblur = function () {
                setValFunc(el.value, function (jsonObj) {
                    setHtmlCallback(ArdublocklyServer.jsonToHtmlTextInput(jsonObj));
                });
            };
        }
    };

    settingsPathInputListeners('settings_compiler_location',
        ArdublocklyServer.setCompilerLocation,
        Ardublockly.setCompilerLocationHtml);
    settingsPathInputListeners('settings_sketch_location',
        ArdublocklyServer.setSketchLocationHtml,
        Ardublockly.setSketchLocationHtml);
    settingsPathInputListeners('settings_load_delay',
        ArdublocklyServer.setLoadDelayOptions,
        Ardublockly.setLoadDelayHtml);

    Ardublockly.bindClick_('serial_startstop_label', Ardublockly.serialStartStop);
    Ardublockly.bindClick_('serial_timestamp_label', Ardublockly.serialTimeStamp);
    Ardublockly.bindClick_('serial_send_input', Ardublockly.serialSendInput);
    Ardublockly.bindClick_('serial_send_clear', Ardublockly.clearSerialSandedContent);
    Ardublockly.bindClick_('serial_receive_clear', Ardublockly.clearSerialReceivedContent);

    var serialInputListeners = function (elId) {
        var el = document.getElementById(elId);
        if (el.readOnly === false) {
            // Event listener that send the data when the user presses 'Enter'
            el.onkeypress = function (e) {
                if (!e) { // noinspection JSDeprecatedSymbols
                    e = window.event;
                }
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    Ardublockly.serialSendInput();
                }
            };
        }
    };
    serialInputListeners('serial_input');
};

/** Set show time stamp or not in serial monitor. */
Ardublockly.serialTimeStamp = function () {
    var el = document.getElementById('serial_timestamp');
    el.checked = !el.checked;
    Ardublockly.setSerialTimeStampSettings(el.checked);
};

/** Set start or stop serial monitor. */
Ardublockly.serialStartStop = function () {
    var el = document.getElementById('serial_startstop');
    el.checked = !el.checked;
    var elSP = document.getElementById('serial_value_setting');
    var serialPortValue = elSP.options[elSP.selectedIndex].value;
    var elBRV = document.getElementById('baud_rate_setting');
    var baudRateValue = elBRV.options[elBRV.selectedIndex].value;
    if (serialPortValue != 'USB') {
        if (el.checked) {
            document.getElementById('serial_startstop_label').textContent =
                Ardublockly.getLocalStr('serial_stop');
            Ardublockly.serialRun(serialPortValue, baudRateValue);
        } else {
            document.getElementById('serial_startstop_label').textContent =
                Ardublockly.getLocalStr('serial_start');
        }
    }
};

/** Start or stop serial monitor */
Ardublockly.serialRun = function () {
    (async () => {
        var Readline = require('@electron/remote').require('@serialport/parser-readline');
        var SerialPort = require('@electron/remote').require("serialport");
        var parser = new Readline();
        var arduinoport = new SerialPort(serialValue, {baudRate: baudRateValue}).setEncoding('utf8');
        arduinoport.on("open", (err) => {
            console.log('serial port open'); //成功連接時印出port open
            if (err) {
                Ardublockly.shortMessage(Ardublockly.getLocalStr('serial_port_error'))
            }
        }, 20);
        arduinoport.pipe(parser)
        parser.on('data', line => {
            console.log(line)
        })
    })();
};

/** Clear serial monitor received data.*/
Ardublockly.clearSerialInput = function () {
    var el = document.getElementById('serial_input');
    el.value = '';
};

/** Clear serial monitor sanded data.*/
Ardublockly.clearSerialSandedContent = function () {
    var el = document.getElementById('serial_send_content');
    el.value = '';
};

/** Clear serial monitor received data.*/
Ardublockly.clearSerialReceivedContent = function () {
    var el = document.getElementById('serial_receive_content');
    el.value = '';
};

/** Input data to serial port. */
Ardublockly.serialSendInput = function () {
    var el = document.getElementById('serial_input');
    var appendEl = document.getElementById('serial_send_content');
    var eolsEl = document.getElementById('end_of_line_setting');
    var eolsValue = eolsEl.options[eolsEl.selectedIndex].value;
    var timeStampEl = document.getElementById('serial_timestamp');
    var timeStampValue = timeStampEl.checked;
    var timeStamp = '';
    if (timeStampValue) {
        timeStamp = Ardublockly.getNowFormatDate() + ' ->   ';
    }
    if (eolsValue !== 'none') {
        if (eolsValue === 'cr') {
            appendEl.value = appendEl.value + timeStamp + el.value + '\r';
        } else if (eolsValue !== 'nl') {
            appendEl.value = appendEl.value + timeStamp + el.value + '\n';
        } else {
            appendEl.value = appendEl.value + timeStamp + el.value + '\r\n';
        }
    } else {
        appendEl.value = appendEl.value + timeStamp + el.value;
    }
    Ardublockly.clearSerialInput();
    setInterval(function () {
        appendEl.scrollTop = appendEl.scrollHeight;
    }, 500);
};

/** Sets the Ardublockly server IDE setting to upload and sends the code. */
Ardublockly.ideSendUpload = function () {
    // Check if this is the currently selected option before edit sever setting
    if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendUpload) {
        Ardublockly.showExtraIdeButtons(false);
        Ardublockly.setIdeSettings(null, 'upload');
    }
    var el = document.getElementById('serial_port');
    var serialValue = el.options[el.selectedIndex].value;
    if (serialValue == "USB") {
        Ardublockly.alertMessage(
            Ardublockly.getLocalStr('usbUploadTitle'),
            Ardublockly.getLocalStr('usbUploadBody'),
            true, function () {
                Ardublockly.shortMessage(Ardublockly.getLocalStr('usbUpload'));
                Ardublockly.resetIdeOutputContent();
                Ardublockly.sendCode();
            });
    } else {
        ArdublocklyServer.cliKillPutty();
        Ardublockly.shortMessage(Ardublockly.getLocalStr('uploadingSketch'));
        Ardublockly.resetIdeOutputContent();
        Ardublockly.sendCode();
    }
};

/** Sets the Ardublockly server IDE setting to open and sends the code. */
Ardublockly.ideSendOpen = function () {
    // Check if this is the currently selected option before edit sever setting
    if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendOpen) {
        Ardublockly.showExtraIdeButtons(false);
        Ardublockly.setIdeSettings(null, 'open');
    }
    Ardublockly.shortMessage(Ardublockly.getLocalStr('openingSketch'));
    Ardublockly.resetIdeOutputContent();
    Ardublockly.sendCode();
};

/** Function bound to the left IDE button, to be changed based on settings. */
Ardublockly.ideButtonLargeAction = Ardublockly.ideSendUpload;

/** Function bound to the middle IDE button, to be changed based on settings. */
Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendOpen;

/** Initialises the IDE buttons with the default option from the server. */
Ardublockly.initialiseIdeButtons = function () {
    document.getElementById('button_ide_middle').title =
        Ardublockly.getLocalStr('openSketch');
    document.getElementById('button_ide_large').title =
        Ardublockly.getLocalStr('uploadSketch');
    ArdublocklyServer.requestIdeOptions(function (jsonObj) {
        if (jsonObj != null) {
            Ardublockly.changeIdeButtons(jsonObj.selected);
        } // else Null: Ardublockly server is not running, do nothing
    });
};

/**
 * Changes the IDE launch buttons based on the option indicated in the argument.
 * @param {!string} value One of the 3 possible values from the drop down select
 *     in the settings modal: 'upload' or 'open'.
 */
Ardublockly.changeIdeButtons = function (value) {
    var largeButton = document.getElementById('button_ide_large');
    var middleButton = document.getElementById('button_ide_middle');
    var openTitle = Ardublockly.getLocalStr('openSketch');
    var uploadTitle = Ardublockly.getLocalStr('uploadSketch');
    if (value === 'upload') {
        Ardublockly.changeIdeButtonsDesign(value);
        Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendOpen;
        Ardublockly.ideButtonLargeAction = Ardublockly.ideSendUpload;
        middleButton.title = openTitle;
        largeButton.title = uploadTitle;
    } else if (value === 'open') {
        Ardublockly.changeIdeButtonsDesign(value);
        Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendUpload;
        Ardublockly.ideButtonLargeAction = Ardublockly.ideSendOpen;
        middleButton.title = uploadTitle;
        largeButton.title = openTitle;
    }
};

/**
 * Loads an XML file from the server and replaces the current blocks into the
 * Blockly workspace.
 * @param {!string} xmlFile Server location of the XML file to load.
 */
Ardublockly.loadServerXmlFile = function (xmlFile, filename) {
    var loadXmlFileAccepted = function () {
        // loadXmlBlockFile loads the file asynchronously and needs a callback
        var loadXmlCb = function (success) {
            if (success) {
                Ardublockly.renderContent();
                Ardublockly.sketchNameSet(filename);
            } else {
                Ardublockly.alertMessage(
                    Ardublockly.getLocalStr('invalidXmlTitle'),
                    Ardublockly.getLocalStr('invalidXmlBody'),
                    false);
                Ardublockly.restoreDefault();
            }
        };
        var connectionErrorCb = function () {
            Ardublockly.openNotConnectedModal();
        };
        Ardublockly.loadXmlBlockFile(xmlFile, loadXmlCb, connectionErrorCb);
    };
    loadXmlFileAccepted();
};

Ardublockly.restoreDefault = function () {
    Ardublockly.discardAllBlocks();
};

//Add by darrin - 20190602 - start
/**
 * Switch Arduino source code side.
 */
Ardublockly.codeSwitch = function () {
    if ($('#right_panel').is(":hidden")) {
        $('#right_panel').show();
        $('#main_panel').removeClass('col s12 m12 l12');
        $('#main_panel').addClass('col s12 m12 l8');
    } else {
        $('#right_panel').hide();
        $('#main_panel').removeClass('col s12 m12 l8');
        $('#main_panel').addClass('col s12 m12 l12');
    }
    Ardublockly.resizeToggleToolboxButton();
};
//Add by darrin - 20190602 - end

/**
 * Loads an XML file from the users file system and adds the blocks into the
 * Blockly workspace.
 */
Ardublockly.loadUserXmlFile = function () {
    // Create File Reader event listener function
    var parseInputXMLFile = function (e) {
        var xmlFile = e.target.files[0];
        if (xmlFile !== undefined) {
            var filename = xmlFile.name;
            var extensionPosition = filename.lastIndexOf('.');
            if (extensionPosition !== -1) {
                filename = filename.substr(0, extensionPosition);
            }

            var reader = new FileReader();
            reader.onload = function () {
                var success = Ardublockly.replaceBlocksfromXml(reader.result);
                if (success) {
                    Ardublockly.renderContent();
                    Ardublockly.sketchNameSet(filename);
                } else {
                    Ardublockly.alertMessage(
                        Ardublockly.getLocalStr('invalidXmlTitle'),
                        Ardublockly.getLocalStr('invalidXmlBody'),
                        false);
                    Ardublockly.restoreDefault();
                }
            };
            reader.readAsText(xmlFile);
        }
    };

    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile === null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';

        var selectFileWrapperDom = document.createElement('DIV');
        selectFileWrapperDom.id = 'select_file_wrapper';
        selectFileWrapperDom.style.display = 'none';
        selectFileWrapperDom.appendChild(selectFileDom);

        document.body.appendChild(selectFileWrapperDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLFile, false);
    }
    selectFile.click();
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Ardublockly.saveXmlFile = function () {
    Ardublockly.saveTextFileAs(
        document.getElementById('sketch_name').value + '.xml',
        Ardublockly.generateXml());
};

/**
 * Creates an Arduino Sketch file containing the Arduino code generated from
 * the Blockly workspace and prompts the users to save it into their local file
 * system.
 */
Ardublockly.saveSketchFile = function () {
    Ardublockly.saveTextFileAs(
        document.getElementById('sketch_name').value + '.ino',
        Ardublockly.generateArduino());
};

/**
 * Creates an text file with the input content and files name, and prompts the
 * users to save it into their local file system.
 * @param {!string} fileName Name for the file to be saved.
 * @param {!string} content Text data to be saved in to the file.
 */
Ardublockly.saveTextFileAs = function (fileName, content) {
    var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName);
};

/**
 * Retrieves the Examples from local folder to populates the example xml files
 * and opens the Examples list dialog.
 */
Ardublockly.openExamples = function () {
    if (document.location.hostname !== 'localhost' && document.location.hostname !== '127.0.0.1') {
        ArdublocklyServer.requestExamplesList('./examples.json', function (jsonObj) {
            Ardublockly.setExamplesHtml(jsonObj);
        });
    } else {
        ArdublocklyServer.requestExamplesList('/exampleslist', function (jsonObj) {
            try {
                var fs = require("@electron/remote").require('fs');
                var data = JSON.stringify(jsonObj);
                fs.writeFile("./ardublockly/examples.json", data, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            } catch (e) {
                console.log(e);
            }
            Ardublockly.setExamplesHtml(jsonObj);
        });
    }
};

/**
 * Open putty as serial monitor.
 */

Ardublockly.openSerialMonitor = function () {
    if (document.location.hostname !== 'localhost' && document.location.hostname !== '127.0.0.1') {
        Ardublockly.openNotConnectedModal();
    } else {
        var el = document.getElementById('serial_port');
        var serialValue = el.options[el.selectedIndex].value;
        if (serialValue != "USB") {
            var sendCodeReturn = function (jsonObj) {
                if (jsonObj === null) return Ardublockly.openNotConnectedModal();
                var dataBack = ArdublocklyServer.jsonToIdeModal(jsonObj);
                Ardublockly.arduinoIdeOutput(dataBack);
            };
            ArdublocklyServer.cliKillPutty();
            ArdublocklyServer.sendCliToPutty(sendCodeReturn);
        }
        else {
            Ardublockly.shortMessage(Ardublockly.getLocalStr('usbCantmonitor'));
        }
    }
};

/**
 * Open serial monitor dialog.
 */
/*
Ardublockly.openSerialMonitor = function () {
    if (document.location.hostname !== 'localhost' && document.location.hostname !== '127.0.0.1') {
        Ardublockly.openNotConnectedModal();
    } else {
        ArdublocklyServer.requestSerialPorts(function (jsonObj) {
            Ardublockly.setSerialPortsValueHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        ArdublocklyServer.requestSerialTimeStamp(function (jsonObj) {
            Ardublockly.setSerialTimeStampHtml(jsonObj);
        });
        ArdublocklyServer.requestEndOfLineOptions(function (jsonObj) {
            Ardublockly.setEndOfLineHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        ArdublocklyServer.requestBaudRateOptions(function (jsonObj) {
            Ardublockly.setBaudRateHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        Ardublockly.clearSerialReceivedContent();
        Ardublockly.clearSerialSandedContent();
        Ardublockly.clearSerialInput();
        var elSP = document.getElementById('serial_value_setting');
        var serialPortValue = elSP.options[elSP.selectedIndex].value;
        if (serialPortValue !== 'USB') {
            var elBRV = document.getElementById('baud_rate_setting');
            var baudRateValue = elBRV.options[elBRV.selectedIndex].value;
            Ardublockly.openSerialMonitorModal();
        } else {
            Ardublockly.shortMessage(Ardublockly.getLocalStr('serial_port_error'))
        }
    }
};
*/

/**
 * Show about dialog.
 */
Ardublockly.openAbout = function () {
    Ardublockly.openAboutModal();
};

/**
 * Retrieves the Settings from ArdublocklyServer to populates the form data
 * and opens the Settings modal dialog.
 */
Ardublockly.openSettings = function () {
    var jsonBoard = Blockly.Arduino.Boards.boardJson();
    if (document.location.hostname !== 'localhost' && document.location.hostname !== '127.0.0.1') {
        Ardublockly.setArduinoSimpleBoardsHtml(
            ArdublocklyServer.jsonToHtmlDropdown(jsonBoard));
    } else {
        Ardublockly.setArduinoBoardsHtml(
            ArdublocklyServer.jsonToHtmlDropdown(jsonBoard));

        ArdublocklyServer.requestCompilerLocation(function (jsonObj) {
            Ardublockly.setCompilerLocationHtml(
                ArdublocklyServer.jsonToHtmlTextInput(jsonObj));
        });
        ArdublocklyServer.requestSketchLocation(function (jsonObj) {
            Ardublockly.setSketchLocationHtml(
                ArdublocklyServer.jsonToHtmlTextInput(jsonObj));
        });
        ArdublocklyServer.requestSerialPorts(function (jsonObj) {
            Ardublockly.setSerialPortsHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        //Add by darrin for open putty
        ArdublocklyServer.requestBaudRateOptions(function (jsonObj) {
            Ardublockly.setBaudRateHtml(
                ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        ArdublocklyServer.requestIdeOptions(function (jsonObj) {
            Ardublockly.setIdeHtml(ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
        });
        ArdublocklyServer.requestLoadDelayOptions(function (jsonObj) {
            Ardublockly.setLoadDelayHtml(
                ArdublocklyServer.jsonToHtmlTextInput(jsonObj));
        });
    }
    // Language menu only set on page load within Ardublockly.initLanguage()
    Ardublockly.openSettingsModal();
};

/**
 * Sets the compiler location form data retrieve from an updated element.
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setCompilerLocationHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var compLocIp = document.getElementById('settings_compiler_location');
    if (compLocIp != null) {
        compLocIp.value = newEl.value || compLocIp.value ||
            Ardublockly.getLocalStr('compilerLocationSelect');
        //"請輸入Arduino IDE的路徑";
        compLocIp.style.cssText = newEl.style.cssText;
    }
};

/**
 * Sets the sketch location form data retrieve from an updated element.
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setSketchLocationHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var sketchLocIp = document.getElementById('settings_sketch_location');
    if (sketchLocIp != null) {
        sketchLocIp.value = newEl.value || sketchLocIp.value ||
            Ardublockly.getLocalStr('sketchFolderSelect');
        //"請輸入草稿碼儲存的資料夾";
        sketchLocIp.style.cssText = newEl.style.cssText;
    }
};

/**
 * Replaces the Arduino Boards form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setArduinoSimpleBoardsHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var boardDropdown = document.getElementById('simple_board');
    if (boardDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'settings_simple_board';
        newEl.id = 'simple_board';
        newEl.onchange = Ardublockly.setSimpleBoard;
        boardDropdown.parentNode.replaceChild(newEl, boardDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the Arduino Board type with the selected user input from the drop down.
 */
Ardublockly.setSimpleBoard = function () {
    var el = document.getElementById('simple_board');
    var boardValue = el.options[el.selectedIndex].value;
    Ardublockly.selectedboard = boardValue;
    Ardublockly.changeBlocklyArduinoBoard(
        boardValue.toLowerCase().replace(/ /g, '_'));
};

/**
 * Replaces the Arduino Boards form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setArduinoBoardsHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var boardDropdown = document.getElementById('board');
    if (boardDropdown !== null) {
        // Restarting the select elements built by materialize
        var boardValue = boardDropdown.options[boardDropdown.selectedIndex].value;
        $('select').material_select('destroy');
        newEl.name = 'settings_board';
        newEl.id = 'board';
        newEl.onchange = Ardublockly.setBoard;
        boardDropdown.parentNode.replaceChild(newEl, boardDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the Arduino Board type with the selected user input from the drop down.
 */
Ardublockly.setBoard = function () {
    var el = document.getElementById('board');
    var boardValue = el.options[el.selectedIndex].value;
    Ardublockly.selectedboard = boardValue;
    var jsonBoard = Blockly.Arduino.Boards.boardJson();
    var boardFlag;
    for (var i = 0; i < jsonBoard.options.length; i++) {
        if (jsonBoard.options[i].value == boardValue) {
            boardFlag = jsonBoard.options[i].board_flag;
            break;
        }
    }
    ArdublocklyServer.setArduinoBoard(boardValue, function (jsonObj) {
    });
    ArdublocklyServer.setArduinoBoardFlag(boardFlag, function (jsonObj) {
    });
    Ardublockly.changeBlocklyArduinoBoard(
        boardValue.toLowerCase().replace(/ /g, '_'));
};

/**
 * Replaces the Serial Port form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setSerialPortsHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var serialDropdown = document.getElementById('serial_port');
    if (serialDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'settings_serial';
        newEl.id = 'serial_port';
        newEl.onchange = Ardublockly.setSerial;
        serialDropdown.parentNode.replaceChild(newEl, serialDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/** Sets the Serial Port with the selected user input from the drop down. */
Ardublockly.setSerial = function () {
    var el = document.getElementById('serial_port');
    var serialValue = el.options[el.selectedIndex].value;
    ArdublocklyServer.setSerialPort(serialValue, function (jsonObj) {
        var newEl = ArdublocklyServer.jsonToHtmlDropdown(jsonObj);
        Ardublockly.setSerialPortsHtml(newEl);
    });
};

/**
 * Replaces IDE options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setIdeSettings' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setIdeHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var ideDropdown = document.getElementById('ide_settings');
    if (ideDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'settings_ide';
        newEl.id = 'ide_settings';
        newEl.onchange = Ardublockly.setIdeSettings;
        ideDropdown.parentNode.replaceChild(newEl, ideDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the IDE settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *     it to the listeners, but not used.
 * @param {string} preset A value to set the IDE settings bypassing the drop
 *     down selected value. Valid data: 'upload', or 'open'.
 */
Ardublockly.setIdeSettings = function (e, preset) {
    var ideValue;
    if (preset !== undefined) {
        ideValue = preset;
    } else {
        var el = document.getElementById('ide_settings');
        ideValue = el.options[el.selectedIndex].value;
    }
    Ardublockly.changeIdeButtons(ideValue);
    ArdublocklyServer.setIdeOptions(ideValue, function (jsonObj) {
        Ardublockly.setIdeHtml(ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
    });
};

/**
 * Show the examples list form example folder.
 * @return {void} Might exit early if response is null.
 */
Ardublockly.setExamplesHtml = function (jsonObj) {
    if (jsonObj) {
        var examplesLocIp = jsonObj["exampleslist"]["path"];
        var readExamplesLoc = jsonObj["exampleslist"]["path"].replace("\\", "/") + "/";
        var exlist = JSON.parse(jsonObj["exampleslist"]["list"]);
        var resultStringArray = [];
        var index;

        resultStringArray.push('<ul class="collapsible" data-collapsible="accordion">');
        exlist.forEach(function (element) {
            var exname = element["name"];
            var exfiles = element["files"];

            resultStringArray.push('<li id="exdir_' + exname + '">');
            resultStringArray.push('<div class="collapsible-header">' + exname + '</div>');
            resultStringArray.push('<div class="collapsible-body">');
            resultStringArray.push('<ul class="collection">');

            index = 1;
            exfiles.forEach(function (files) {
                resultStringArray.push(
                    '<li id="exfile_' + exname + Ardublockly.addZero(index, 2) + '">' +
                    '<a href="#" class="collection-item">' + files + '</a></li>');
                index++;
            });
            resultStringArray.push('</ul></div></li>');
        });
        resultStringArray.push('</ul>');


        document.getElementById('examples_list').innerHTML =
            prettyPrintOne(resultStringArray.join(''), 'html', false);

        exlist.forEach(function (element) {
            var exname = element["name"];
            var exfiles = element["files"];
            index = 1;
            exfiles.forEach(function (files) {
                Ardublockly.bindClick_('exfile_' + exname + Ardublockly.addZero(index, 2), function () {
                    var fname = files.substr(0, files.indexOf(".xml"));
                    Ardublockly.loadServerXmlFile('../' + readExamplesLoc + exname +
                        "/" + files, fname);
                    $('#examples_dialog').modal('close');
                });
                index++;
            });
        });
        $('.collapsible').collapsible({
            accordion: false,
            onOpen: function (el) {
                //alert('Open');
            }, // Callback for Collapsible open
            onClose: function (el) {
                //alert('Closed');
            } // Callback for Collapsible close
        });
    }
    Ardublockly.openExamplesModal();
};

/**
 * Replaces Baud Rate options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setBaudRateSettings' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setBaudRateHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var baudRateDropdown = document.getElementById('baud_rate_setting');
    if (baudRateDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'setting_baud_rate';
        newEl.id = 'baud_rate_setting';
        newEl.onchange = Ardublockly.setBaudRateSettings;
        baudRateDropdown.parentNode.replaceChild(newEl, baudRateDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the Baud Rate settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *     it to the listeners, but not used.
 * @param {string} preset A value to set the Baud Rate settings bypassing the drop
 *     down selected value.
 */
Ardublockly.setBaudRateSettings = function (e, preset) {
    var baudRateValue;
    if (preset !== undefined) {
        baudRateValue = preset;
    } else {
        var el = document.getElementById('baud_rate_setting');
        baudRateValue = el.options[el.selectedIndex].value;
    }
    ArdublocklyServer.setBaudRateOptions(baudRateValue, function (jsonObj) {
        Ardublockly.setBaudRateHtml(ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
    });
};

/**
 * Sets the load delay form data retrieve from an updated element.
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setLoadDelayHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var load_Delay_Value = document.getElementById('settings_load_delay');
    if (load_Delay_Value != null) {
        load_Delay_Value.value = newEl.value || load_Delay_Value.value;
        load_Delay_Value.style.cssText = newEl.style.cssText;
    }
};

/**
 * Replaces the Serial Port form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setSerialPortsValueHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var serialDropdown = document.getElementById('serial_value_setting');
    if (serialDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'settings_serial_value';
        newEl.id = 'serial_value_setting';
        newEl.onchange = Ardublockly.setSerialValue;
        serialDropdown.parentNode.replaceChild(newEl, serialDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/** Sets the Serial Port with the selected user input from the drop down. */
Ardublockly.setSerialValue = function () {
    var el = document.getElementById('serial_value_setting');
    var serialValue = el.options[el.selectedIndex].value;
    ArdublocklyServer.setSerialPort(serialValue, function (jsonObj) {
        var newEl = ArdublocklyServer.jsonToHtmlDropdown(jsonObj);
        Ardublockly.setSerialPortsValueHtml(newEl);
    });
};

/**
 * Replaces Baud Rate options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setBaudRateSettings' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setBaudRateValueHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var baudRateDropdown = document.getElementById('baud_rate_value_setting');
    if (baudRateDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'setting_baud_rate_value';
        newEl.id = 'baud_rate_value_setting';
        newEl.onchange = Ardublockly.setBaudRateSettings;
        baudRateDropdown.parentNode.replaceChild(newEl, baudRateDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the Baud Rate settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *     it to the listeners, but not used.
 * @param {string} preset A value to set the Baud Rate settings bypassing the drop
 *     down selected value.
 */
Ardublockly.setBaudRateValueSettings = function (e, preset) {
    var baudRateValue;
    if (preset !== undefined) {
        baudRateValue = preset;
    } else {
        var el = document.getElementById('baud_rate_value_setting');
        baudRateValue = el.options[el.selectedIndex].value;
    }
    ArdublocklyServer.setBaudRateOptions(baudRateValue, function (jsonObj) {
        Ardublockly.setBaudRateValueHtml(ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
    });
};

/**
 * Replaces End Of Line options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setEndOfLineSettings' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setEndOfLineHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();

    var endOfLineDropdown = document.getElementById('end_of_line_setting');
    if (endOfLineDropdown !== null) {
        // Restarting the select elements built by materialize
        $('select').material_select('destroy');
        newEl.name = 'setting_end_of_line';
        newEl.id = 'end_of_line_setting';
        newEl.onchange = Ardublockly.setEndOfLineSettings;
        endOfLineDropdown.parentNode.replaceChild(newEl, endOfLineDropdown);
        // Refresh the materialize select menus
        $('select').material_select();
    }
};

/**
 * Sets the End Of Line settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *     it to the listeners, but not used.
 * @param {string} preset A value to set the End Of Line settings bypassing the drop
 *     down selected value. Valid data: 'none', 'nl', 'cr', or 'nlcr.
 */
Ardublockly.setEndOfLineSettings = function (e, preset) {
    var endOfLineValue;
    if (preset !== undefined) {
        endOfLineValue = preset;
    } else {
        var el = document.getElementById('end_of_line_setting');
        endOfLineValue = el.options[el.selectedIndex].value;
    }
    ArdublocklyServer.setEndOfLineOptions(endOfLineValue, function (jsonObj) {
        Ardublockly.setEndOfLineHtml(ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
    });
};

/**
 * Replaces Time Stamp option form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialTimeStampSettings' function
 * @return {void} Might exit early if response is null.
 * @param newEl
 */
Ardublockly.setSerialTimeStampHtml = function (newEl) {
    if (newEl === null) return Ardublockly.openNotConnectedModal();
    var serialTimeStampLabel = document.getElementById('serial_timestamp_label');
    serialTimeStampLabel.style.color = "#ff0000";
    if (newEl.selected == 1) {
        serialTimeStampLabel.style.color = "#00ff00";
    }
};

/**
 * Sets the Time Stamp settings data with the selected user input from the checkbox.
 * @param {boolean} preset A value to time stamp.
 */
Ardublockly.setSerialTimeStampSettings = function (preset) {
    var timeStampValue;
    if (preset !== undefined) {
        timeStampValue = preset;
    } else {
        var el = document.getElementById('serial_timestamp');
        timeStampValue = el.checked;
    }
    ArdublocklyServer.setSerialTimeStamp(timeStampValue ? '1' : '0', function (jsonObj) {
        Ardublockly.setSerialTimeStampHtml(jsonObj);
    });
};

/**
 * Send the Arduino Code to the ArdublocklyServer to process.
 * Shows a loader around the button, blocking it (unblocked upon received
 * message from server).
 */
Ardublockly.sendCode = function () {
    Ardublockly.largeIdeButtonSpinner(true);

    /**
     * Receives the IDE data back to be displayed and stops spinner.
     * @return {void} Might exit early if response is null.
     * @param jsonObj
     */
    var sendCodeReturn = function (jsonObj) {
        Ardublockly.largeIdeButtonSpinner(false);
        if (jsonObj === null) return Ardublockly.openNotConnectedModal();
        var dataBack = ArdublocklyServer.jsonToIdeModal(jsonObj);
        Ardublockly.arduinoIdeOutput(dataBack);
    };

    ArdublocklyServer.sendSketchToServer(
        Ardublockly.generateArduino(), sendCodeReturn);
};

/** Populate the workspace blocks with the XML written in the XML text area. */
Ardublockly.XmlTextareaToBlocks = function () {
    var success = Ardublockly.replaceBlocksfromXml(
        document.getElementById('content_xml').value);
    if (success) {
        Ardublockly.renderContent();
    } else {
        Ardublockly.alertMessage(
            Ardublockly.getLocalStr('invalidXmlTitle'),
            Ardublockly.getLocalStr('invalidXmlBody'),
            false);
        Ardublockly.restoreDefault();
    }
};

/**
 * Private variable to save the previous version of the Arduino Code.
 * @type {!String}
 * @private
 */
Ardublockly.PREV_ARDUINO_CODE_ = 'void setup() {\n\n}\n\n\nvoid loop() {\n\n}';

/**
 * Populate the Arduino Code and Blocks XML panels with content generated from
 * the blocks.
 */
Ardublockly.renderContent = function () {
    // Render Arduino Code with latest change highlight and syntax highlighting
    var arduinoCode = Ardublockly.generateArduino();
    if (arduinoCode !== Ardublockly.PREV_ARDUINO_CODE_) {
        var diff = JsDiff.diffWords(Ardublockly.PREV_ARDUINO_CODE_, arduinoCode);
        var resultStringArray = [];
        for (var i = 0; i < diff.length; i++) {
            if (!diff[i].removed) {
                var escapedCode = diff[i].value.replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                if (diff[i].added) {
                    resultStringArray.push(
                        '<span class="code_highlight_new">' + escapedCode + '</span>');
                } else {
                    resultStringArray.push(escapedCode);
                }
            }
        }
        document.getElementById('content_arduino').innerHTML =
            prettyPrintOne(resultStringArray.join(''), 'cpp', false);
        Ardublockly.PREV_ARDUINO_CODE_ = arduinoCode;
    }

    // Generate plain XML into element
    document.getElementById('content_xml').value = Ardublockly.generateXml();
};

/**
 * Private variable to indicate if the toolbox is meant to be shown.
 * @type {!boolean}
 * @private
 */
Ardublockly.TOOLBAR_SHOWING_ = true;

/**
 * Toggles the blockly toolbox and the Ardublockly toolbox button On and Off.
 * Uses namespace member variable TOOLBAR_SHOWING_ to toggle state.
 */
Ardublockly.toggleToolbox = function () {
    if (Ardublockly.TOOLBAR_SHOWING_) {
        Ardublockly.blocklyCloseToolbox();
        Ardublockly.displayToolbox(false);
    } else {
        Ardublockly.displayToolbox(true);
    }
    Ardublockly.TOOLBAR_SHOWING_ = !Ardublockly.TOOLBAR_SHOWING_;
};

/** @return {boolean} Indicates if the toolbox is currently visible. */
Ardublockly.isToolboxVisible = function () {
    return Ardublockly.TOOLBAR_SHOWING_;
};

/**
 * Lazy loads the additional block JS files from the ./block directory.
 * Initialises any additional Ardublockly extensions.
 */
Ardublockly.importExtraBlocks = function () {
    /**
     * Parses the JSON data to find the block and languages js files.
     * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
     *     indicates an error occurred.
     * @return {void} Might exit early if response is null.
     */
    var jsonDataCb = function (jsonDataObj) {
        if (jsonDataObj === null) return Ardublockly.openNotConnectedModal();
        if (jsonDataObj.categories !== undefined) {
            var head = document.getElementsByTagName('head')[0];
            for (var catDir in jsonDataObj.categories) {
                var blocksLangJsLoad = document.createElement('script');
                blocksLangJsLoad.src = '../blocks/' + catDir + '/msg/' + //'messages.js';
                    'lang/' + Ardublockly.LANG + '.js';
                head.appendChild(blocksLangJsLoad);

                var blocksJsLoad = document.createElement('script');
                blocksJsLoad.src = '../blocks/' + catDir + '/blocks.js';
                head.appendChild(blocksJsLoad);

                var blocksGeneratorJsLoad = document.createElement('script');
                blocksGeneratorJsLoad.src = '../blocks/' + catDir +
                    '/generator_arduino.js';
                head.appendChild(blocksGeneratorJsLoad);
            }
        }
    };
    // Reads the JSON data containing all block categories from ./blocks directory
    ArdublocklyServer.getJson('../blocks/blocks_data.json', jsonDataCb);
};

/** Opens a modal with a list of categories to add or remove to the toolbox */
Ardublockly.openExtraCategoriesSelect = function () {
    /**
     * Parses the JSON data from the server into a list of additional categories.
     * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
     *     indicates an error occurred.
     * @return {void} Might exit early if response is null.
     */
    var jsonDataCb = function (jsonDataObj) {
        if (jsonDataObj === null) return Ardublockly.openNotConnectedModal();
        var htmlContent = document.createElement('div');
        if (jsonDataObj.categories !== undefined) {
            for (var catDir in jsonDataObj.categories) {
                // Function required to maintain each loop variable scope separated
                (function (cat) {
                    var clickBind = function (tickValue) {
                        if (tickValue) {
                            var catDom = (new DOMParser()).parseFromString(
                                cat.toolbox.join(''), 'text/xml').firstChild;
                            Ardublockly.addToolboxCategory(cat.toolboxName, catDom);
                        } else {
                            Ardublockly.removeToolboxCategory(cat.toolboxName);
                        }
                    };
                    htmlContent.appendChild(Ardublockly.createExtraBlocksCatHtml(
                        cat.categoryName, cat.description, clickBind));
                })(jsonDataObj.categories[catDir]);
            }
        }
        Ardublockly.openAdditionalBlocksModal(htmlContent);
    };
    // Reads the JSON data containing all block categories from ./blocks directory
    ArdublocklyServer.getJson('../blocks/blocks_data.json', jsonDataCb);
};

/** Add by darrin 20190315 */
/** Add extra modal with a user define list of categories to the toolbox */
Ardublockly.addExtraCategories = function () {
    /**
     * Parses the JSON data from the server into a list of additional categories.
     * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
     *     indicates an error occurred.
     * @return {void} Might exit early if response is null.
     */
    var catArray = {};
    var catList = [];
    var jsonDataCb = function (jsonDataObj) {
        if (jsonDataObj === null) return Ardublockly.openNotConnectedModal();
        if (jsonDataObj.categories !== undefined) {
            var preChild = Ardublockly.xmlTree.getElementsByTagName('category')[Ardublockly.xmlTree.getElementsByTagName('category').length - 1].id;
            for (var catDir in jsonDataObj.categories) {
                catList.push(catDir);
                var cat = jsonDataObj.categories[catDir];
                var tempCat = '../blocks/' + cat;
                ArdublocklyServer.getJson(tempCat, function (jsonSubData) {
                    var catDom = (new DOMParser()).parseFromString(
                        jsonSubData.toolbox.join(''), 'text/xml').firstChild;
                    catArray[jsonSubData.toolboxName] = catDom;
                });
            }
        }
    };
    // Reads the JSON data containing all block categories from ./blocks directory
    // Now reading a local file, to be replaced by server generated JSON
    ArdublocklyServer.getJson('../blocks/blocks_data.json', jsonDataCb);

    var load_delay = 1000;
    if (document.location.hostname === 'localhost' || document.location.hostname === '127.0.0.1') {
        ArdublocklyServer.requestLoadDelayOptions(function (jsonObj) {
            if (!jsonObj.errors) {
                load_delay = jsonObj.selected || '1000';
            }
        });
    }
    setTimeout(function () {
        for (var index = 0; index < catList.length; index++) {
            var toolboxName = catList[index];
            if (!Ardublockly.checkCategoryExists(toolboxName)) {
                Ardublockly.addToolboxCategory(toolboxName, catArray[toolboxName]);
            }
        }
    }, load_delay);
};

/** Informs the user that the selected function is not yet implemented. */
Ardublockly.functionNotImplemented = function () {
    Ardublockly.shortMessage('Function not yet implemented');
};

/**
 * Interface to display messages with a possible action.
 * @param {!string} title HTML to include in title.
 * @param {!string} body HTML to include in body.
 * @param {boolean=} confirm Indicates if the user is shown a single option (ok)
 *     or an option to cancel, with an action applied to the "ok".
 * @param {string=|function=} callback If confirm option is selected this would
 *     be the function called when clicked 'OK'.
 */
Ardublockly.alertMessage = function (title, body, confirm, callback) {
    Ardublockly.materialAlert(title, body, confirm, callback);
};

/**
 * Interface to displays a short message, which disappears after a time out.
 * @param {!string} message Text to be temporarily displayed.
 */
Ardublockly.shortMessage = function (message) {
    Ardublockly.MaterialToast(message);
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!function} func Event handler to bind.
 * @private
 */
Ardublockly.bindClick_ = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    // Need to ensure both, touch and click, events don't fire for the same thing
    var propagateOnce = function (e) {
        e.stopPropagation();
        e.preventDefault();
        func();
    };
    el.addEventListener('ontouchend', propagateOnce);
    el.addEventListener('click', propagateOnce);
};

//Add by darrin - 20190602 -start
Ardublockly.addZero = function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
};
//Add by darrin - 20190602 -end

//Add by darrin - 20200130 -start
Ardublockly.getNowFormatDate = function () {
    var date = new Date();
    //var separator1 = "-";
    var separator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var strHour = date.getHours();
    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour;
    }
    var strMin = date.getMinutes();
    if (strMin >= 0 && strMin <= 9) {
        strMin = "0" + strMin;
    }
    var strSec = date.getMinutes();
    if (strSec >= 0 && strSec <= 9) {
        strSec = "0" + strSec;
    }
    var strMinSec = date.getMilliseconds();
    if (strMinSec >= 0 && strMinSec <= 9) {
        strMinSec = "00" + strMinSec;
    } else if (strMinSec >= 10 && strMinSec <= 99) {
        strMinSec = "0" + strMinSec;
    }
    var currentdate = date.getFullYear() + separator2 + month + separator2 + strDate + separator2 + strHour + separator2 + strMin + separator2 + strSec + '.' + strMinSec;
    return currentdate;
};
//Add by darrin - 20200130 -end

//Add by darrin - 20211121 -start
Ardublockly.getBroswer = function () {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1] :
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.edge) return {broswer: "Edge", version: Sys.edge};
    if (Sys.ie) return {broswer: "IE", version: Sys.ie};
    if (Sys.firefox) return {broswer: "Firefox", version: Sys.firefox};
    if (Sys.chrome) return {broswer: "Chrome", version: Sys.chrome};
    if (Sys.opera) return {broswer: "Opera", version: Sys.opera};
    if (Sys.safari) return {broswer: "Safari", version: Sys.safari};

    return {broswer: "", version: "0"};
}

//Add by darrin - 20211121 -end
