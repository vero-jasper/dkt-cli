#!/bin/bash

rm -rf ./server/src/configs/cdnResource.json
rm -rf ./client/dist

cd ./client && sh ./build.sh
cp -R -f ./dist/cdnResource.json ../server/src/configs/
cd ../server && sh ./build.sh