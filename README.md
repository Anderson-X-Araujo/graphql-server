# Build a GraphQL Apollo Server with Node.js, Prisma, and SQLite

## Comandos usados

```bash
  yarn init
  yarn add apollo-server@^2 graphql@^14.6.0
  yarn add  prisma -D
  yarn add @prisma/client
  npx prisma init
  npx prisma migrate dev
  npx prisma generate
  npx prisma studio
```

## Queries and Mutations

```graphql
mutation CreateData {
  post(url: "prisma.io", description: "Prisma is ...") {
    id
    description
    url
  }
}

query ReturnData {
  info
  feed {
    id
    description
    url
  }
}
```

[Link do Vídeo](https://www.youtube.com/watch?v=YQ8CZoGjxD0)
