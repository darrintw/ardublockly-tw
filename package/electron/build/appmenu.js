/**
 * @author    carlosperate
 * @copyright 2015 carlosperate https://github.com/carlosperate
 * @license   Licensed under the The MIT License (MIT), a copy can be found in
 *            the electron project directory LICENSE file.
 *
 * @fileOverview Generates the application menu bar.
 */

const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const shell = electron.shell;
const dialog = electron.dialog;
const MenuItem = electron.MenuItem;
const BrowserWindow = electron.BrowserWindow;
const server = require('./servermgr.js');
const projectLocator = require('./projectlocator.js');

module.exports.setArdublocklyMenu = function (devMode) {
    if (typeof (devMode) === 'undefined') devMode = false;

    var ardublocklyMenu = [];
    if (process.platform == 'darwin') {
        ardublocklyMenu.push(getMacMenuData());
    }
    ardublocklyMenu.push(getFileMenuData());
    ardublocklyMenu.push(getEditMenuData());
    ardublocklyMenu.push(getProgramMenuData());
    ardublocklyMenu.push(getExamplesMenuData());
    if (process.platform == 'darwin') {
        ardublocklyMenu.push(getWindowMenuData());
    }
    ardublocklyMenu.push(getHelpMenuData());

    if (devMode) {
        ardublocklyMenu.push(getDevMenuData());
    }

    Menu.setApplicationMenu(Menu.buildFromTemplate(ardublocklyMenu));
};

var getMacMenuData = function () {
    return {
        label: 'Ardublockly',
        submenu: [
            {
                label: '關於',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openAbout()');
                }
            }, {
                type: 'separator'
            }, {
                label: '偏好設定',
                accelerator: 'CmdOrCtrl+,',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openSettings()');
                }
            }, {
                type: 'separator'
            }, {
                label: '服務',
                submenu: []
            }, {
                type: 'separator'
            }, {
                label: '隱藏Ardublockly',
                accelerator: 'Command+H',
                selector: 'hide:'
            }, {
                label: '隱藏其他',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
            }, {
                label: '顯示全部',
                selector: 'unhideAllApplications:'
            }, {
                type: 'separator'
            }, {
                label: '離開',
                accelerator: 'CmdOrCtrl+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    };
};

var getFileMenuData = function () {
    var fileMenu = {
        label: '檔案',
        submenu: [
            {
                label: '新增檔案',
                accelerator: 'CmdOrCtrl+N',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.restoreDefault()', true);
                }
            }, {
                label: '開啟積木檔',
                accelerator: 'CmdOrCtrl+O',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadUserXmlFile()', true);
                }
            }, {
                label: '另存積木檔',
                accelerator: 'CmdOrCtrl+S',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.saveXmlFile()');
                }
            }, {
                label: '另存積木圖',
                accelerator: 'Shift+CmdOrCtrl+p',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.downloadScreenshot()');
                }
            }, {
                label: '另存Arduino檔',
                accelerator: 'Shift+CmdOrCtrl+S',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.saveSketchFile()');
                }
            }, {
                label: '重新啟動伺服器',
                accelerator: 'CmdOrCtrl+F5',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .reloadIgnoringCache();
                }
            }
        ]
    };

    // On MacOS the Quit option is in the app menu, so only add it if not mac
    if (process.platform != 'darwin') {
        fileMenu.submenu.push(
            {
                type: 'separator'
            }, {
                label: '離開',
                accelerator: 'CmdOrCtrl+Q',
                click: function () {
                    server.stopServer();
                    app.quit();
                }
            }
        );
    }

    return fileMenu;
};

var getEditMenuData = function () {
    var editMenu = {
        label: '編輯',
        submenu: [
            {
                label: '復原',
                accelerator: 'CmdOrCtrl+Z',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.workspace.undo(false)');
                }
            }, {
                label: '重作',
                accelerator: 'CmdOrCtrl+Y',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.workspace.undo(true)');
                }
            }, {
                type: 'separator'
            }, {
                label: '剪下',
                accelerator: 'CmdOrCtrl+X',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyCut()');
                }
            }, {
                label: '複製',
                accelerator: 'CmdOrCtrl+C',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyCopy()');
                }
            }, {
                label: '貼上',
                accelerator: 'CmdOrCtrl+V',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyPaste()');
                }
            }, {
                label: '複製並貼上',
                accelerator: 'CmdOrCtrl+D',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyDuplicate()');
                }
            }, {
                label: '刪除',
                accelerator: 'Delete',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyDelete()');
                }
            }
        ]
    };

    // On MacOS Preferences is in the app menu, so only add it if not mac
    if (process.platform != 'darwin') {
        editMenu.submenu.push(
            {
                type: 'separator'
            }, {
                label: '偏好設定',
                accelerator: 'CmdOrCtrl+,',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openSettings()');
                }
            }
        );
    }

    return editMenu;
};

var getExamplesMenuData = function () {
    return {
        label: '範例',
        click: function () {
            BrowserWindow.getFocusedWindow().webContents
                .executeJavaScript('Ardublockly.openExamples()');
        }
    };
};

var getProgramMenuData = function () {
    return {
        label: '程式',
        submenu: [
            {
                label: '在IDE開啟草稿碼',
                //accelerator: 'CmdOrCtrl+O',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendOpen()');
                }
            },/* {
                label: '驗證/編譯草稿碼',
                accelerator: 'CmdOrCtrl+R',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendVerify()');
                }
            },*/ {
                label: '上傳草稿碼至Arduino開發版',
                accelerator: 'CmdOrCtrl+U',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendUpload()');
                }
            }
        ]
    };
};

var getWindowMenuData = function () {
    return {
        label: '視窗',
        submenu: [
            {
                label: '最小化',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
            }, {
                label: '關閉',
                accelerator: 'Command+W',
                selector: 'performClose:'
            }, {
                type: 'separator'
            }, {
                label: '移到最前面',
                selector: 'arrangeInFront:'
            }
        ]
    };
};

var getHelpMenuData = function () {
    return {
        label: '幫助',
        submenu: [
            {
                label: '阿丟部落格',
                click: function () {
                    shell.openExternal(
                        'https://sites.google.com/view/ardublocklylearning');
                }
            }, {
                label: '快速使用手冊',
                click: function () {
                    shell.openExternal('https://drive.google.com/open?id=1VFh3OJCPvyYcUR3qm5FQgWk3YgzygKxE');
                }
            }, {
                label: '積木工作室',
                click: function () {
                    shell.openExternal('http://localhost:8007/ardublockly/blockfactory/index.html');
                }
            }, {
                label: '蜂鳴器鋼琴',
                click: function () {
                    shell.openExternal('http://localhost:8007/ardublockly/buzzer-piano/index.html');
                }
            }, {
                type: 'separator'
            }, {
                label: '網站',
                click: function () {
                    shell.openExternal('https://ardublockly.ymtech.education');
                }
            }, {
                label: '原始碼',
                click: function () {
                    shell.openExternal(
                        'https://github.com/darrintw/ardublockly-tw');
                }
            }, {
                label: '回報錯誤',
                click: function () {
                    shell.openExternal(
                        'https://github.com/darrintw/ardublockly-tw/issues');
                }
            }, {
                type: 'separator'
            }, {
                label: '線上更新',
                click: function () {
                    server.stopServer();
                    app.quit();
                    shell.openPath(projectLocator.getProjectRootPath() + '\\update.bat');
                }
            }, {
                label: '關於',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openAbout()');
                    //shell.openExternal('http://localhost:8000/docs/About');
                }
            }
        ]
    };
};

var getDevMenuData = function () {
    return {
        label: '開發',
        submenu: [
            {
                label: '重新載入',
                accelerator: 'CmdOrCtrl+F5',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .reloadIgnoringCache();
                }
            }, {
                label: '切換開發工具',
                accelerator: 'F12',
                click: function () {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }, {
                type: 'separator'
            }, {
                label: '停止伺服器',
                accelerator: 'Shift+CmdOrCtrl+S',
                click: server.stopServer
            }, {
                label: '重啟伺服器',
                accelerator: 'Shift+CmdOrCtrl+R',
                click: server.restartServer
            }, {
                type: 'separator'
            }, {
                label: '開啟側邊欄',
                click: function () {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            '$(".button-collapse").sideNav("show")');
                }
            }/*, {
                label: '開啟額外積木清單',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.openExtraCategoriesSelect()');
                }
            }, {
                type: 'separator'
            },  {
                label: '測試清單項目',
                click: testFunction
            }*/
        ]
    };
};

var functionNotImplemented = function () {
    dialog.showMessageBox({
        type: 'info',
        title: '說明',
        buttons: ['確定',],
        message: '這個功能尚未開發'
    });
};

var testFunction = function () {
    // Here you can place any test code you'd like to test on a menu click
    functionNotImplemented();
};
