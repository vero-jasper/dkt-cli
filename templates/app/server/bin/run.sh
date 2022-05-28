#!/bin/bash
OPT=$1 # start: 后台启动；run：前台启动；
PROJECT_ENV=$2 # development | testing | production | off

ARGS=(${PROJECT_ENV//,/ })
PROJECT_ENV=${ARGS[0]}
SERVER_ENV=${ARGS[1]}

if [[ -z $PROJECT_ENV ]];then
  PROJECT_ENV=production
fi

if [[ -z $SERVER_ENV ]];then
  SERVER_ENV=${PROJECT_ENV}
fi

if [ "$MATRIX_CODE_DIR"x != ""x ]; then
    SERVER_ROOT_PATH=$MATRIX_CODE_DIR
else
    SERVER_ROOT_PATH=$(cd "$(dirname "$0")"; cd ..; pwd)
fi

#BASE_DIR=$(pwd)
#PROC_NAME=${BASE_DIR}/dist/index.js
PROC_NAME=${SERVER_ROOT_PATH}/dist/index.js
NAME_SUFFIXX="\>"

PROC_ID=`ps -ef|grep -i ${PROC_NAME}${NAME_SUFFIXX}|grep -v "grep"|awk '{print $2}'`

case "$OPT" in
  "start" ) # 运行在后台
  if [[ -z $PROC_ID ]];then
    echo "start..."
    sleep 1
    NODE_ENV=${PROJECT_ENV} SERVER_ENV=${SERVER_ENV} node ${PROC_NAME} &
    echo ${PROC_NAME} is running:${PROJECT_ENV} server:${SERVER_ENV}
  else
    echo ${PROC_NAME} is running, pid:${PROC_ID[@]}
  fi
  ;;

  "run" ) # 运行在前台
  if [[ -z $PROC_ID ]];then
    echo "start..."
    sleep 1
    NODE_ENV=${PROJECT_ENV} SERVER_ENV=${SERVER_ENV} node ${PROC_NAME}
    echo ${PROC_NAME} is running:${PROJECT_ENV} server:${SERVER_ENV}
  else
    echo ${PROC_NAME} is running, pid:${PROC_ID[@]}
  fi
  ;;

  "stop" ) # 运行在前台
  if [[ -n $PROC_ID ]];then
    kill -9 ${PROC_ID[@]}
    echo ${PROC_NAME} is stoped
  fi
  ;;

  * )
  echo '[start|run]'
  ;;

esac