#!bin/bash

htmlFile=index.html
cssFile=index.css
jsFile=index.js

# check current directory
currentDirectory=$(basename $(pwd))

# go up one level in directory until current directory is main-app
while [[ ! "$(basename $(pwd))" == "main-app" ]]
do
    cd ..
done

# check if files exists
if [[ -e "dist/$htmlFile"  &&  -e "dist/$cssFile" &&  -e "dist/$jsFile" ]];
then
    echo "all files found"
else
    echo "error: file not found"
fi

echo "moving files to static folder main-app directory"

while [[ ! "$(basename $(pwd))" == "ImzGen" ]]
do
    cd ..
done

# check if main-app directory exists in static folder
if [[ ! -d static/main-app ]]; then
echo "warning: directory does not exists creating directory ImzGen/static/main-app"
mkdir static/main-app
fi

echo "cloning html css js files drom ImzGenfrontend-vite/main-app/dist to ImzGen/static/main-app" 
cp frontend-vite/main-app/dist/index.html static/main-app/
cp frontend-vite/main-app/dist/index.css static/main-app/
cp frontend-vite/main-app/dist/index.js static/main-app/