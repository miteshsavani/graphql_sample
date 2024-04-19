import { storeJSON, readJSON, JsonFile } from '../../data/index.js';
import Base from '../index.js';

class AuthorOprations extends Base {
    constructor() {
        super();
        this.fileType = JsonFile.authors;
        this.root = 'authors';
    }
}

const authorOprations = new AuthorOprations();

export const authorOps = authorOprations;
