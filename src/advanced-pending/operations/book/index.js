import { JsonFile } from '../../data/index.js';
import Base from '../index.js';

class BookOprations extends Base {
	constructor() {
		super();
		this.fileType = JsonFile.books;
		this.root = 'books';
	}

	booksByAuthorId(authorId) {
		return this.getAll().filter((b) => +b.authorId === +authorId);
	}
}

const bookOperation = new BookOprations();

export const bookOps = bookOperation;
