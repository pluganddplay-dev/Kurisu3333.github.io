@echo off
REM ===========================================================================
REM  Pro Sound Vision - local preview launcher
REM  Double-click this file to run the website on your computer.
REM  - First run: installs the tools it needs (one time only).
REM  - Every run after: just starts the live preview.
REM ===========================================================================

REM Always work from the folder this script lives in.
cd /d "%~dp0"

REM Make sure Node.js / npm is installed.
where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo [ERROR] Node.js was not found on this computer.
  echo Install it from https://nodejs.org/  then double-click this file again.
  echo.
  pause
  exit /b 1
)

REM First-time setup: install dependencies only if they aren't there yet.
if not exist "node_modules\" (
  echo.
  echo First-time setup: installing dependencies. This happens only once...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] Setup failed. Please read the messages above.
    echo.
    pause
    exit /b 1
  )
)

echo.
echo ===========================================================================
echo  Starting your website preview...
echo  When it is ready, open this address in your browser:
echo.
echo      http://localhost:8080
echo.
echo  Keep this window open while you work.
echo  Press Ctrl+C (then Y) in this window to stop the preview.
echo ===========================================================================
echo.

call npm start

REM If the server stops or fails to start, keep the window open so messages stay visible.
echo.
pause
