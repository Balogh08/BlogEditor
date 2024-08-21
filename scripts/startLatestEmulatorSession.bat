@echo off
setlocal

REM Navigate to the emulatorSessions directory
cd emulatorSessions

REM Get the latest directory
for /f "delims=" %%d in ('dir /b /ad /o-d') do set "latestDir=%%d" & goto :foundLatestDir
:foundLatestDir

REM Navigate back to the original directory
cd ..

REM Start the Firebase emulators with the latest directory
firebase emulators:start --only firestore,auth,functions,storage,pubsub --import=./emulatorSessions/%latestDir%
