@echo off
title Mixly 安装^&升级助手
@echo off
echo.
echo ***************************Mixly 安装^&升级助手****************************
echo 感谢您选择使用Mixly软件，如果您是第一次使用本软件，请仔细阅读本说明。
echo.
echo.
echo 目前Mixly软件支持对多种硬件的编程，因为支持所有硬件编程需要占用您硬盘较大的空间，您可以选择只安装您需要用到的部分功能即可。
echo.
echo Mixly软件支持的硬件，具体说明如下：
echo ·Arduino AVR系列开发板（包括Arduino UNO,Nano,Mega 2560,Pro Mini 等）为默认支持，无需选择。
echo ·MicroPython ESP32系列开发板(MicroPython[ESP32_MixGo]、MicroPython[ESP32_HandBit]等)为默认支持，无需选择。
echo ·ESP8266系列开发板（包括WeMos D1,NodeMCU 等）
echo ·ESP32系列开发板（包括MixGo,掌控板,普通ESP32开发板等）
echo ·STM32系列开发板
echo.
echo.
echo 安装^&升级即将开始，您可以选择安装部分功能，输入y表示安装该功能，输入n表示不安装该功能。
@echo off

echo.
set esp32_select=
set /p esp32_select=安装 ESP32(y/n):
IF "%esp32_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set esp8266_select=
set /p esp8266_select=安装 ESP8266(y/n):
IF "%esp8266_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set stm32_select=
set /p stm32_select=安装 STM32(y/n):
IF "%stm32_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)

IF EXIST "%~dp0"\.git\index.lock (
	del /f /s /q "%~dp0"\.git\index.lock > nul
	rd /q /s "%~dp0"\.git\index.lock > nul
)

echo.
echo.
cd "%~dp0"\PortableGit\cmd\
rem update blocks
git reset --hard origin/master
git pull origin master

git gc
git prune

rem rd/s/q "%~dp0"\.git\refs\original > nul
rem rd/s/q "%~dp0"\.git\logs\ > nul

IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git (
	IF EXIST "%~dp0"\arduino\portable\packages\.git (
		del /f /s /q "%~dp0"\arduino\portable\packages\.git > nul
		rd /q /s "%~dp0"\arduino\portable\packages\.git > nul
	)
)

rem 更新esp32 硬件仓库
IF "%esp32_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
		del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
	)
	rem 删除ESP32系列板卡的界面
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_ESP32.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_HandBit.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_MixePi.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_MixGo.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\esp32\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp32\PortableGit\ /s /c /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\esp32\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
			del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
			rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/mixlyplus/win_esp32.git "%~dp0arduino\portable\packages\esp32\
	)
)

rem 更新esp8266硬件仓库
IF "%esp8266_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
	)
	rem 删除ESP8266界面
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_ESP8266.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp8266\PortableGit\ /s /f /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\esp8266\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
			del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
			rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/mixlyplus/win_esp8266.git "%~dp0arduino\portable\packages\esp8266\
	)
)

cd "%~dp0"\PortableGit\cmd\

@echo on
echo Ardublockly was updated，Enjoy it!
@echo off
pause