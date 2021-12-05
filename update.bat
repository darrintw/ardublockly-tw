@echo off
title Ardublockly update tool
@echo off
echo.
echo ***************************Ardublockly Update Tool****************************
echo First update will spend long time to fetch git info.
@echo off
timeout 5 > nil

IF EXIST "%~dp0\.git\index.lock" (
    echo *****Delete .git\index.lock file******
    echo.
	del /f /s /q "%~dp0\.git\index.lock" > nul
	rd /q /s "%~dp0\.git\index.lock" > nul
	@echo off
)

echo.
cd "%~dp0"
rem update blocks
echo.
echo Set git url
"%~dp0..\MinGit\cmd\git.exe" remote set-url origin https://github.com/darrintw/ardublockly-tw.git

echo.
echo Set git longpaths true
"%~dp0..\MinGit\cmd\git.exe" config --system core.longpaths true

echo.
echo Reset origin/master
"%~dp0..\MinGit\cmd\git.exe" reset --hard origin/master

echo.
echo pull origin/master
"%~dp0..\MinGit\cmd\git.exe" pull --force origin master

echo.
echo Git gc
"%~dp0..\MinGit\cmd\git.exe" gc
@echo off

IF EXIST "%~dp0\__pycache__" (
    echo *****Delete __pycache__ folder******
	echo.
	del /f /s /q "%~dp0\__pycache__" > nul
	rd /q /s "%~dp0\__pycache__" > nul
	@echo off
)

IF EXIST "%~dp0\package" (
    echo *****Delete package folder******
	echo.
	del /f /s /q "%~dp0\package" > nul
	rd /q /s "%~dp0\package" > nul
	@echo off
)

IF EXIST "%~dp0\Tools" (
    echo *****Delete Tools folder******
	echo.
	del /f /s /q "%~dp0\Tools" > nul
	rd /q /s "%~dp0\Tools" > nul
	@echo off
)

IF EXIST "%~dp0\ardublockly.iml" (
    echo *****Delete ardublockly.iml file******
	echo.
	del /f /s /q "%~dp0\\ardublockly.iml" > nul
	@echo off
)

IF EXIST "%~dp0\build.bat" (
    echo *****Delete build.bat file******
	echo.
	del /f /s /q "%~dp0\build.bat" > nul
	@echo off
)

IF EXIST "%~dp0\pack.bat" (
    echo *****Delete pack.bat file******
	echo.
	del /f /s /q "%~dp0\pack.bat" > nul
	@echo off
)

IF EXIST "%~dp0\run.bat" (
    echo *****Delete run.bat file******
	echo.
	del /f /s /q "%~dp0\run.bat" > nul
	@echo off
)

IF EXIST "%~dp0\run_dev.bat" (
    echo *****Delete run_dev.bat file******
	echo.
	del /f /s /q "%~dp0\run_dev.bat" > nul
	@echo off
)

IF EXIST "%~dp0\start.py" (
    echo *****Delete start.py file******
	echo.
	del /f /s /q "%~dp0\start.py" > nul
	@echo off
)

IF EXIST "%~dp0\test.py" (
    echo *****Delete run_dev.bat file******
	echo.
	del /f /s /q "%~dp0\test.py" > nul
	@echo off
)

echo.
echo ***************************Ardublockly was updated, Enjoy it.****************************
@echo off
pause

cd "%~dp0\..\"
run.bat