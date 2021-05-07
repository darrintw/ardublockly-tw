@echo off
title Ardublockly update tool
@echo off
rem echo.
rem echo ***************************Mixly 安装^&升级助手****************************
rem @echo off

rem echo.
rem set linkit7697_select=
rem set /p linkit7697_select=安装 LinkIt 7697(y/n):
rem IF "%linkit7697_select%"=="n" (
rem 	echo No
rem ) ELSE (
rem 	echo Yes
rem )
rem echo.
rem set digispark_select=
rem set /p digispark_select=安装 Digispark(y/n):
rem IF "%digispark_select%"=="n" (
rem 	echo No
rem ) ELSE (
rem 	echo Yes
rem )
rem echo.
rem set esp32_select=
rem set /p esp32_select=安装 ESP32(y/n):
rem IF "%esp32_select%"=="n" (
rem 	echo No
rem ) ELSE (
rem 	echo Yes
rem )
rem echo.
rem set esp8266_select=
rem set /p esp8266_select=安装 ESP8266(y/n):
rem IF "%esp8266_select%"=="n" (
rem 	echo No
rem ) ELSE (
rem 	echo Yes
rem )
rem echo.
rem set stm32_select=
rem set /p stm32_select=安装 STM32(y/n):
rem IF "%stm32_select%"=="n" (
rem 	echo No
rem ) ELSE (
rem 	echo Yes
rem )

echo.
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

rem IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\.git (
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\.git > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\.git > nul
rem 	)
rem )

rem Update LinkIt 7697
rem IF "%linkit7697_select%"=="n" (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\LinkIt (
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\LinkIt > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\LinkIt > nul
rem 	)
rem ) ELSE (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\LinkIt\.git (
rem 		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\LinkIt\PortableGit\ /s /c /h > nul
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\arduino\portable\packages\LinkIt\PortableGit\cmd\
rem 		git reset --hard origin/master
rem 		git pull origin master
rem 		cd "%~dp0"
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\LinkIt\PortableGit > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\LinkIt\PortableGit > nul
rem 	) ELSE (
rem 		IF EXIST "%~dp0"\arduino\portable\packages\LinkIt (
rem 			del /f /s /q "%~dp0"\arduino\portable\packages\LinkIt > nul
rem 			rd /q /s "%~dp0"\arduino\portable\packages\LinkIt > nul
rem 		)
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\PortableGit\cmd\
rem 		git clone https://gitee.com/mixlyplus/win_esp32.git "%~dp0arduino\portable\packages\LinkIt\
rem 	)
rem )

rem Update Digispark
rem IF "%linkit7697_select%"=="n" (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\digistump (
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\digistump > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\digistump > nul
rem 	)
rem ) ELSE (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\digistump\.git (
rem 		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\digistump\PortableGit\ /s /c /h > nul
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\arduino\portable\packages\digistump\PortableGit\cmd\
rem 		git reset --hard origin/master
rem 		git pull origin master
rem 		cd "%~dp0"
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\digistump\PortableGit > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\digistump\PortableGit > nul
rem 	) ELSE (
rem 		IF EXIST "%~dp0"\arduino\portable\packages\digistump (
rem 			del /f /s /q "%~dp0"\arduino\portable\packages\digistump > nul
rem 			rd /q /s "%~dp0"\arduino\portable\packages\digistump > nul
rem 		)
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\PortableGit\cmd\
rem 		git clone https://gitee.com/mixlyplus/win_esp32.git "%~dp0arduino\portable\packages\LinkIt\
rem 	)
rem )

rem 更新esp32 硬件仓库
rem IF "%esp32_select%"=="n" (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
rem 	)
rem ) ELSE (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\esp32\.git (
rem 		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp32\PortableGit\ /s /c /h > nul
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\arduino\portable\packages\esp32\PortableGit\cmd\
rem 		git reset --hard origin/master
rem 		git pull origin master
rem 		cd "%~dp0"
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
rem 	) ELSE (
rem 		IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
rem 			del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
rem 			rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
rem 		)
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\PortableGit\cmd\
rem 		git clone https://gitee.com/mixlyplus/win_esp32.git "%~dp0arduino\portable\packages\esp32\
rem 	)
rem )

rem 更新esp8266硬件仓库
rem IF "%esp8266_select%"=="n" (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
rem 	)
rem 	rem 删除ESP8266界面
rem 	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_ESP8266.html > nul
rem ) ELSE (
rem 	IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git (
rem 		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp8266\PortableGit\ /s /f /h > nul
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\arduino\portable\packages\esp8266\PortableGit\cmd\
rem 		git reset --hard origin/master
rem 		git pull origin master
rem 		cd "%~dp0"
rem 		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
rem 		rd /q /s "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
rem 	) ELSE (
rem 		IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
rem 			del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
rem 			rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
rem 		)
rem 		echo.
rem 		echo.
rem 		cd "%~dp0"\PortableGit\cmd\
rem 		git clone https://gitee.com/mixlyplus/win_esp8266.git "%~dp0arduino\portable\packages\esp8266\
rem 	)
rem )

cd "%~dp0"\PortableGit\cmd\

@echo on
echo Ardublockly was updated, Enjoy it!
@echo off
pause