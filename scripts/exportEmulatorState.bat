@echo off

REM Define the base directory for emulator sessions
set "base_dir=.\emulatorSessions"

REM Check if the base directory exists, if not, create it
if not exist "%base_dir%" mkdir "%base_dir%"

REM Use PowerShell to get the current date and time in UTC and format it as YYYYMMDDHHMM
for /f "delims=" %%i in ('powershell -Command "Get-Date -Format yyyyMMddHHmm"') do set "dir=%base_dir%\%%i"

REM Make the directory
if not exist "%dir%" mkdir "%dir%"

REM Run Firebase emulator export
firebase emulators:export "%dir%"
