# Ticketing Microservices PoC

## Auth Service

It's going to manage user data and has the following routes:
  - sign up user.
  - sign in user.
  - sign out user.
  - current user data.

## Ticket Service

For manage user tickets.
  - create ticket.
  - update ticket.
  - list of tickets

## Nats Test

These apps are for testing NATS Streaming Server.

```bash
yarn pub
```

```bash
yarn listen
```

and use portforward for the nats streaming server port (4222).

## Client

It's a react application with connection to the internal ingress.

## Local Development

You need to have Skaffold <https://skaffold.dev> installed in your local machine. Then run:

```bash
skaffold dev
```

and all the microservices are going to be running in the local k8s cluster.

### Secrets

for the auth service (and everything who use jwt token authentication).

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<string>
```

