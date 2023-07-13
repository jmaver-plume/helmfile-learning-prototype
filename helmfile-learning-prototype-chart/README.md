# My Helm Chart

This chart deploys an application to Kubernetes.

## Configuration

The following table lists the configurable parameters of the chart and their default values.

| Parameter          | Description                | Default  |
|--------------------|----------------------------|----------|
| `replicaCount`     | Number of replicas         | `nil`    |
| `containers`       | List of Pod specifications | `nil`    |
| `service.type`     | Service type               | `nil`    |
| `service.port`     | Service port               | `nil`    |

You must provide your own values for all these parameters.
