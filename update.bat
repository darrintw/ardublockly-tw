@echo off
title Ardublockly update tool
@echo off
echo.
echo ***************************Ardublockly Update Tool****************************
@echo off

echo.
IF EXIST "%~dp0\Ardublockly\.git\index.lock" (
	del /f /s /q "%~dp0\Ardublockly\.git\index.lock" > nul
	rd /q /s "%~dp0\Ardublockly\.git\index.lock" > nul
)
@echo off

cd "%~dp0"
rem update blocks
..\PortableGit\cmd\git config --system core.longpaths true
..\PortableGit\cmd\git reset --hard origin/master
..\PortableGit\cmd\git pull origin master

..\PortableGit\cmd\git gc
..\PortableGit\cmd\git prune

IF EXIST "%~dp0\Ardublockly\__pycache__" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\__pycache__" > nul
	rd /q /s "%~dp0\Ardublockly\__pycache__" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\notepad++" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\notepad++" > nul
	rd /q /s "%~dp0\Ardublockly\notepad++" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\package" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\package" > nul
	rd /q /s "%~dp0\Ardublockly\package" > nul
	@echo off
)


IF EXIST "%~dp0\Ardublockly\PortableGit" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\PortableGit" > nul
	rd /q /s "%~dp0\Ardublockly\PortableGit" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\DigisparkWindowsDriver" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\DigisparkWindowsDriver" > nul
	rd /q /s "%~dp0\Ardublockly\DigisparkWindowsDriver" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\ardublockly.iml" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\ardublockly.iml" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\ardublockly.log" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\ardublockly.log" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\build.bat" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\build.bat" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\pack.bat" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\pack.bat" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\run.bat" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\run_dev.bat" > nul
	@echo off
)

IF EXIST "%~dp0\Ardublockly\run_dev.bat" (
	echo.
	del /f /s /q "%~dp0\Ardublockly\run_dev.bat" > nul
	@echo off
)

echo.
echo ***************************Ardublockly was updated, Enjoy it.****************************
@echo off
pause

cd "%~dp0\..\"
run.bat