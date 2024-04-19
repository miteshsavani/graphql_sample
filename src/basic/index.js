import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { authors, books } from '../../data/index.js';

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    authorId: ID
    author: Author
  }

  type Author {
    id: ID
    name: String
    books: [Book]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    authors: [Author]
  }
`;
const resolvers = {
	Book: {
		author(book) {
			return authors.find((a) => a.id === book.authorId);
		},
	},

	Author: {
		books(author) {
			return books.filter((b) => b.authorId === author.id);
		},
	},

	Query: {
		books: () => books,
		authors: () => authors,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 3232 },
});

console.log(` server ready at: ${url}`);
