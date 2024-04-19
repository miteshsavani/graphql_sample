import { bookOps } from './operations/book/index.js';
import { authorOps } from './operations/author/index.js';

export const resolvers = {
	Book: {
		author(book) {
			return authorOps.getById(book.authorId);
		},
	},

	Author: {
		books(author) {
			return bookOps.booksByAuthorId(author.id);
		},
	},

	Query: {
		books: () => bookOps.getAll(),
		book: (_, { id }) => bookOps.getById(id),

		authors: () => authorOps.getAll(),
		author: (_, { id }) => authorOps.getById(id)
	},
	Mutation: {
		addBook: (_, { bookData }) => bookOps.add(bookData),
		updateBook: (_, { bookData }) => bookOps.update(bookData),
		deleteBook: (_, { bookId }) => bookOps.delete(bookId),

		addAuthor: (_, { authorData }) => authorOps.add(authorData),
		//updateAuthor: (_,{ authorData }) => authorOps.update(authorData),
		//deteleAuthor: (_,{ authorId }) => authorOps.delete(authorId),
	},
};
