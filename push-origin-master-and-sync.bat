@echo off
setlocal
cd /d %~dp0
where git >nul 2>&1
if errorlevel 1 (
    echo Error: git not found in PATH.
    exit /b 1
)

git rev-parse --abbrev-ref HEAD >nul 2>&1
if errorlevel 1 (
    echo Error: not a git repository.
    exit /b 1
)

for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b
if /i not "%BRANCH%"=="master" (
    echo Error: current branch is %BRANCH%, must be master.
    exit /b 1
)

git push origin master
if errorlevel 1 (
    echo Error: git push origin master failed.
    exit /b 1
)

py .githooks/post-push.py
if errorlevel 1 (
    echo Error: gh-pages sync failed.
    exit /b 1
)
echo Push and gh-pages sync completed.
