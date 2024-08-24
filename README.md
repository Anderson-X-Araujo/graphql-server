# Build a GraphQL Apollo Server with Node.js, Prisma, and SQLite

### Sample Mutation and Query

![Playground Sample 1](./assets/image_1.png)

### Sample Listeners

![Playground Sample 2](./assets/image_2.png)
![Playground Sample 3](./assets/image_3.png)

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
  npx prisma migrate dev --name "add-vote-model"
  npx prisma generate
```

## Queries and Mutations

```graphql
mutation CreateData {
  post(url: "__URL__", description: "__DESCRIPTION__") {
    id
    description
    url
  }
}

# HTTP Headers
{
  "Authorization": "Bearer __TOKEN__"
}

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
  signup(name: "__NAME__", email: "__EMAIL__", password: "__PASSWORD__") {
    token
    user {
      id
      name
    }
  }
}

# --------------------------

mutation Login {
  login(email: "__EMAIL__", password: "__PASSWORD__") {
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

# HTTP Headers
{
  "Authorization": "Bearer __TOKEN__"
}

# --------------------------

mutation Vote {
  vote(linkId: "__LINK_ID__") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}

# HTTP Headers
{
  "Authorization": "Bearer __TOKEN__"
}

# --------------------------

# LISTENERS
subscription Subscription {
  newLink {
    id
    url
    description
    postedBy {
      id
      name
      email
    }
  }
}

subscription Vote {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
```

[Link do Vídeo - Pt. 1](https://www.youtube.com/watch?v=YQ8CZoGjxD0)
[Link do Vídeo - Pt. 2](https://www.youtube.com/watch?v=Hljmp4IrYN8)
[Link do Vídeo - Pt. 3](https://www.youtube.com/watch?v=uLRpnGbSR5A)
