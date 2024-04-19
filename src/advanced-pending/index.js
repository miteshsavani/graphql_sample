import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
	listen: { port: 3232 },
});

console.log(` server ready at: ${url}`);
