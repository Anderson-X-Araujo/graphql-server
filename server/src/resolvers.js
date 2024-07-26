// let links = [
//   {
//     id: "link-0",
//     url: "howtographql.com",
//     description: "Fullstack tutorial for GraphQL",
//   },
// ];

const resolvers = {
  Query: {
    info: () => `This is the API with GraphQL, Node.js, Prisma, and SQLite
`,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
    // feed: () => links,
  },
  Mutation: {
    post: async (parent, args, context) => {
      const { url, description } = args;
      const newLink = context.prisma.link.create({
        data: {
          url,
          description,
        },
      });

      return newLink;
      // let idCount = links.length;

      // const link = {
      //   id: `link-${idCount++}`,
      //   description: args.description,
      //   url: args.url,
      // };
      // links.push(link);

      // return link;
    },
  },
};

module.exports = resolvers;
