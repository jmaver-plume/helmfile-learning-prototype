#!/usr/bin/env bash

eval $(minikube -p minikube docker-env)

(cd ./helmfile && helmfile delete helmfile-learning-prototype)

docker image rm helmfile-learning-prototype-proxy helmfile-learning-prototype-main