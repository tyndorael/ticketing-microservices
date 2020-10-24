# Ticketing Microservices PoC

## Auth Service

It's going to manage user data and has the following routes:
  - sign up user.
  - sign in user.
  - sign out user.
  - current user data.

## Ticket Service

For manage user tickets.
  - create a ticket.
  - update ticket.
  - list of tickets

## Order Service

For manage user orders and states of each one.
- create an order.
- show all order of a user.
- show a specific order by an id.
- cancel order

## NATS Test

These apps are for testing NATS Streaming Server.

```bash
yarn pub
```

```bash
yarn listen
```

Then use a port-forward for the NATS streaming server port (4222).

## Client

It's a React application with connection to the internal ingress.

## Local Development

### Ingress

Install ingress-nginx in the local cluster, so you can use the services.

<https://kubernetes.github.io/ingress-nginx/deploy/>

### Skaffold

You need to have Skaffold <https://skaffold.dev> installed in your local machine. Then run:

```bash
skaffold dev
```

With this all the microservices are going to be running in the local k8s cluster.

### Secrets

for the auth service (and everything who use jwt token authentication) use the following secret.

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<string>
```

### Host File

Edit the file hosts for using a local dns. Add this line at the end of the file:

```
127.0.0.1 ticketing.dev
```

Finally, you can use this url for access to the frontend:

<https://ticketing.dev/>

if it says its not available write "thisisunsafe" and its going to reload automatically.

More info:
<https://www.liquidweb.com/kb/edit-host-file-windows-10/>
