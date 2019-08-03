import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  debug: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
