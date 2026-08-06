@echo off
setlocal
cd /d %~dp0
where git >nul 2>&1
if errorlevel 1 (
    echo Error: git not found in PATH.
    exit /b 1
)
git config core.hooksPath .githooks
echo Installed repo hooks path: .githooks
