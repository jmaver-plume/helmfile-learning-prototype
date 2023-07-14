# helmfile-learning-prototype

The purpose of this project is to learn Helmfile.

## Requirements

- Have 2 express services.
- Service **proxy** should proxy all requests to service **main**.
```
curl localhost:3000
{ url, body, query, headers, method }
```
- Both services should be running as Docker containers in a single Kubernetes Pod.
- The **proxy** service should be exposed using Kubernetes NodePort service.
- The project should be deployed to Minikube using Helmfile and a local Helm Chart.

## Running locally

1. Install Docker, Minikube, and Kubectl and start Docker, and Minikube.
2. Start the project.
```shell
./bin/start.sh
```
3. Verify endpoints work correctly.
```shell
# Get the [PORT] from the output of ./bin/start.sh script.
# Proxied endpoint from proxy to main
curl http://127.0.0.1:[PORT]/proxy

# Endpoint on proxy not proxied to main
curl http://127.0.0.1:[PORT]/not-proxied

# Endpoint on main that should not be accessible
curl http://127.0.0.1:[PORT]/main
```
4. Uninstall the release
```shell```