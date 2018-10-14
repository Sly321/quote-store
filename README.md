# quote-store

Quote Store is a REST API that allows users to store movie and series quotes into a database and read them. Written in Nodejs with GraphQL, Express, Prisma &amp; Postgres. Running on Docker.

## Run

### postgres & prisma clients

```sh
docker-compose up -d
```

### deploy & generate prisma files

[Install prisma](https://www.prisma.io/docs/1.17/get-started/01-setting-up-prisma-new-database-a002/)

```sh
cd database
prisma deploy
# next line is only needed if the prisma configuration has changed
prisma generate
```

### start

```sh
yarn start
```

## TODO

- [ ] Pack client into a Docker Image