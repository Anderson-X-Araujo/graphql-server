# Build a GraphQL Apollo Server with Node.js, Prisma, and SQLite

![Playground Sample](./assets/image_1.png)

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
  yarn add bcryptjs
  yarn add jsonwebtoken
  npx prisma migrate dev --name "add-user-model"
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

# Query Variables
# {
#   "Authorization": "Bearer eyJ..."
# }

# --------------------------

query ReturnData {
  feed {
    id
    description
    url
  }
}

# --------------------------

mutation SignUp {
  signup(name: "Anderson", email: "anderson@mail.com", password: "123456") {
    token
    user {
      id
      name
    }
  }
}

# --------------------------

mutation Login {
  login(email: "anderson@mail.com", password: "123456") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}

# --------------------------

query FeedByUserId {
  feedByCurrentUserId {
    url
    description
  }
}

# Query Variables
# {
#   "Authorization": "Bearer eyJ..."
# }
```

[Link do Vídeo - Pt. 1](https://www.youtube.com/watch?v=YQ8CZoGjxD0)
[Link do Vídeo - Pt. 2](https://www.youtube.com/watch?v=Hljmp4IrYN8)
