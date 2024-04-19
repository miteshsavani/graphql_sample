import { readFileSync, existsSync, writeFileSync } from 'node:fs';

export const readJSONfile = (jsonFileRelativePath, metaURLofFile) => {
	const jsonFileUrl = new URL(jsonFileRelativePath, metaURLofFile);

    if (!existsSync(jsonFileUrl)){
        console.error('file is not present, file path: ', jsonFileUrl);
        return;
    }

	return JSON.parse(
		readFileSync(jsonFileUrl, {
			encoding: 'utf-8',
		})
	);
};


export const writeJSONinFile = (jsonFileRelativePath, metaURLofFile, json) => {
	const jsonFileUrl = new URL(jsonFileRelativePath, metaURLofFile);

    if (!existsSync(jsonFileUrl)){
        console.error('file is not present, file path: ', jsonFileUrl);
        return;
    }

	return writeFileSync(jsonFileUrl, JSON.stringify(json), 'utf-8');

}