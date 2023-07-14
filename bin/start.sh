#!/usr/bin/env bash

eval $(minikube -p minikube docker-env)

(cd ./services/main && docker build -t helmfile-learning-prototype-main -f Dockerfile .)
(cd ./services/proxy && docker build -t helmfile-learning-prototype-proxy -f Dockerfile .)

export MAIN_IMAGE=helmfile-learning-prototype-main
(cd ./helmfile && helmfile sync)

minikube service helmfile-learning-prototype-helmfile-learning-prototype-chart --url