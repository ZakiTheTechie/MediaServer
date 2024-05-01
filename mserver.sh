#! /bin/bash

if [ $# -ne 1 ]
then
   echo "Usage: mserver.sh <user password>"
   exit
else
   # DocumentRoot
   echo $1 | sudo -S chown -R $USER:$USER *
   chmod 644 index.html
   # Images
   cd images
   chmod 655 *
   chmod 755 movies
   cd movies
   chmod 755 *
   cd ../..
   # Javascript
   cd js
   chmod 755 *.js
   cd libs
   chmod 664 *.js
   cd ../..
   # Style Sheets
   cd styles
   chmod 755 *
   cd bootstrap-3.3.4
   cd css
   chmod 664 *.css
   cd ..
   cd fonts
   chmod 755 *
   cd ..
   cd js
   chmod 755 *.js
   cd ../../..
   # Partial Views
   cd views
   chmod 755 *.html
   cd ..
   # Media Files
   cd media
   chmod 755 *.html
fi
