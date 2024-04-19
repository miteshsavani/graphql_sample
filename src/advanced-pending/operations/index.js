import { readJSON, storeJSON } from "../data/index.js";

class Base {
    fileType = null
    root = null
    
    store(data) {
		storeJSON(this.fileType, { [this.root]: data });
	}

	read() {
		const jsonObj = readJSON(this.fileType);
		return jsonObj[this.root];
	}

    getAll() {
		return this.read();
	}

    getById(id) {
		return this.getAll().find((b) => +b.id === +id);
	}

    add(newData) {
		const currentData = this.getAll();
		const newDataWithId = {
			...newData,
			id: currentData.length + 1,
		};
		currentData.push(newDataWithId);
		this.store(currentData);
		return newDataWithId;
	}

    update(updatedData) {
		const isExist = updatedData.id && this.getById(updatedData.id);

		if (isExist) {
			const filterUpdatedData = this.getAll().map((current) => {
				if (+current.id === +updatedData.id) {
					return newData;
				}
				return current;
			});

			this.store(filterUpdatedData);
			return updatedData;
		} else {
			return this.add(updatedData);
		}
    }

    delete(id) {
		const currentData = this.getAll();
		const isExist = currentData.find((b) => +b.id === +id);

		if (isExist) {
			const updatedData = currentData.filter((current) => +current.id !== +id);
			this.store(updatedData);
			return true;
		}
		return false;
	}
}

export default Base;