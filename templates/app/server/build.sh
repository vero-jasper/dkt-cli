 #!/bin/bash
 rm -rf dist
 mkdir dist
 echo "----- mkdir dist "
 npm install --registry=http://registry.npmjs.lianjia.com:7001 && npm run build
 echo " ------ npm install --registry=http://registry.npmjs.lianjia.com:7001 && npm run build"
