#!/bin/bash

# Define the base directory for emulator sessions
base_dir="./emulatorSessions"

# Check if the base directory exists, if not, create it
if [ ! -d "$base_dir" ]; then
  mkdir -p "$base_dir"
fi

# Create a directory name with the current time (up to minutes)
dir="$base_dir/$(date +'%Y%m%d%H%M')"

# Run Firebase emulator export
firebase emulators:export "$dir"
