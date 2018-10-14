# quote-store

Quote Store is an API that allows users to store movie and series quotes into a database and read them. Written in Nodejs with GraphQL, Express, Prisma &amp; Postgres. Running on Docker.

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

## Using

### get all quotes

playground

```graphql
{
  quotes {
    text
  }
}

```

curl

```sh
curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{\n  quotes {\n    text\n  }\n}\n"}' --compressed
```

### add quote

playground

```graphql
mutation {
  createQuote(data: {
    text: "That's what i do, i drink and know things.",
    from: "Tyrion Lannister",
  }) {
    id
  }
}

```

curl

```sh
curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"mutation {\n  createQuote(data: {\n    text: \"That's what i do, i drink and know things.\",\n    from: \"Tyrion Lannister\",\n  }) {\n    id\n  }\n}\n"}' --compressed
```

## TODO

- [ ] pack client into a Docker Image
- [ ] create client typedefs
- [ ] add javascript examples for requests [like here](https://graphql.org/graphql-js/mutations-and-input-types/)
