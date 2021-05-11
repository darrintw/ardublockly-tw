@echo off
title Ardublockly update tool
@echo off
echo.
echo ***************************Ardublockly Update Tool****************************
@echo off

echo.
IF EXIST "%~dp0\.git\index.lock" (
	del /f /s /q "%~dp0\.git\index.lock" > nul
	rd /q /s "%~dp0\.git\index.lock" > nul
)
@echo off

cd "%~dp0"
rem update blocks
..\PortableGit\cmd\git config --system core.longpaths true
..\PortableGit\cmd\git reset --hard origin/master
..\PortableGit\cmd\git pull --force origin master

..\PortableGit\cmd\git gc
..\PortableGit\cmd\git prune

IF EXIST "%~dp0\__pycache__" (
	echo.
	del /f /s /q "%~dp0\__pycache__" > nul
	rd /q /s "%~dp0\__pycache__" > nul
	@echo off
)

IF EXIST "%~dp0\notepad++" (
	echo.
	del /f /s /q "%~dp0\notepad++" > nul
	rd /q /s "%~dp0\notepad++" > nul
	@echo off
)

IF EXIST "%~dp0\package" (
	echo.
	del /f /s /q "%~dp0\package" > nul
	rd /q /s "%~dp0\package" > nul
	@echo off
)


IF EXIST "%~dp0\PortableGit" (
	echo.
	del /f /s /q "%~dp0\PortableGit" > nul
	rd /q /s "%~dp0\PortableGit" > nul
	@echo off
)

IF EXIST "%~dp0\DigisparkWindowsDriver" (
	echo.
	del /f /s /q "%~dp0\DigisparkWindowsDriver" > nul
	rd /q /s "%~dp0\DigisparkWindowsDriver" > nul
	@echo off
)

IF EXIST "%~dp0\ardublockly.iml" (
	echo.
	del /f /s /q "%~dp0\\ardublockly.iml" > nul
	@echo off
)

IF EXIST "%~dp0\ardublockly.log" (
	echo.
	del /f /s /q "%~dp0\ardublockly.log" > nul
	@echo off
)

IF EXIST "%~dp0\build.bat" (
	echo.
	del /f /s /q "%~dp0\build.bat" > nul
	@echo off
)

IF EXIST "%~dp0\pack.bat" (
	echo.
	del /f /s /q "%~dp0\pack.bat" > nul
	@echo off
)

IF EXIST "%~dp0\run.bat" (
	echo.
	del /f /s /q "%~dp0\run_dev.bat" > nul
	@echo off
)

IF EXIST "%~dp0\run_dev.bat" (
	echo.
	del /f /s /q "%~dp0\run_dev.bat" > nul
	@echo off
)

echo.
echo ***************************Ardublockly was updated, Enjoy it.****************************
@echo off
pause

cd "%~dp0\..\"
run.bat