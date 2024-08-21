#!/bin/bash

# Navigate to the emulatorSessions directory
cd emulatorSessions

# Find the latest directory
latestDir=$(ls -td -- */ | head -n 1 | cut -d'/' -f1)

# Navigate back to the original directory
cd ..

# Start the Firebase emulators with the latest directory
firebase emulators:start --only firestore,auth,functions,storage,pubsub --import=./emulatorSessions/"$latestDir"
