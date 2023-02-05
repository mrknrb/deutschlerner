export abstract class AMF {
	static get<type extends _idObject>(array: type[], _id: string) {
		let item = array.find((value) => {
			return value._id === _id;
		});

		if (!item) return;

		return item;
	}
}

export interface _idObject {
	_id: any;
}
