#!/bin/bash

# Function to clean filename
clean_filename() {
    echo "$1" | sed 's/[#?]//g' | sed 's/ /-/g' | sed 's/[()]//g' | sed 's/[,!@]//g' | sed 's/--/-/g' | sed 's/\.\././'
}

cd public/wedding

# Rename files with special characters
for file in *.jpeg *.jpg; do
    if [ -f "$file" ]; then
        newname=$(clean_filename "$file")
        if [ "$file" != "$newname" ]; then
            mv "$file" "$newname"
            echo "Renamed: $file -> $newname"
        fi
    fi
done
