import { readJSONfile, writeJSONinFile } from '../utils/index.js';

export const JsonFile = {
    books: 'books.json',
    authors: 'authors.json'
}

const storeJSON = (filetype, json) => {
    writeJSONinFile(filetype, import.meta.url, json);
}

const readJSON = (filetype) => {
    return readJSONfile(filetype, import.meta.url);
}

export {
    storeJSON,
    readJSON
};
