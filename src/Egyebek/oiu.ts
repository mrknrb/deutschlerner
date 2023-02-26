import { MrkLib } from './MrkLib';
import { OMap } from './OMap';

export class oiu {
	static create<dataType>() {
		// @ts-ignore
		return {} as OMap<dataType>;
	}

	static set<dataType>(
		oMap: OMap<dataType> | undefined,
		key: string | undefined,
		object: dataType
	) {
		if (!oMap || !key) return undefined;
		// @ts-ignore
		oMap[key] = object;
	}
	static setLot<dataType>(
		oMap: OMap<dataType> | undefined,

		objects: {
			key: string | undefined;
			object: dataType;
		}[]
	) {
		if (!oMap || !objects) return undefined;
		objects.forEach((keyObject) => {
			if (!keyObject || !keyObject.key) return undefined;
			// @ts-ignore
			oMap[keyObject.key] = keyObject.object;
		});
	}
	static updateCallback<dataType>(
		oMap: OMap<dataType> | undefined,
		key: string | undefined,
		callback: (objectOld: dataType) => dataType
	) {
		if (!oMap || !key) return undefined;

		let objectOld = oiu.get(oMap, key);
		if (!objectOld) return undefined;
		let objectUpdated = callback(objectOld);
		oiu.set(oMap, key, objectUpdated);
	}

	static get<dataType>(oMap: OMap<dataType> | undefined, key: string | undefined) {
		if (!oMap || !key) return undefined;
		// @ts-ignore
		return oMap[key] as dataType | undefined;
	}
	static getLot<dataType>(oMap: OMap<dataType> | undefined, keys: (string | undefined)[]) {
		let answer = { success: oiu.create<dataType>(), fail: oiu.create<dataType>() };
		if (!oMap || !keys) return answer;
		keys.forEach((key) => {
			let object = oiu.get(oMap, key);
			if (object === undefined) {
				oiu.set(answer.fail, key, undefined);
			} else {
				oiu.set(answer.success, key, object);
			}
		});
		return answer;
	}
	static delete<dataType>(oMap: OMap<dataType> | undefined, key: string | undefined) {
		// @ts-ignore
		if (!oMap || !key || !oMap[key]) return undefined;
		// @ts-ignore
		delete oMap[key];
	}
	static getOrCreate<dataType>(oMap: OMap<dataType> | undefined, key: string | undefined) {
		if (!oMap || !key) return undefined;
		let result = this.get(oMap, key);
		if (result) return result;
		this.set(oMap, key, {});

		return this.get(oMap, key);
	}
	static forEach<dataType>(
		oMap: OMap<dataType> | undefined,
		forEachCallback: (object: dataType, key: string) => any
	) {
		if (!oMap) return undefined;
		MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
			// @ts-ignore
			forEachCallback(object, key);
		});
	}

	static find<dataType>(
		oMap: OMap<dataType>,
		findCallback: (object: dataType, key: string) => boolean
	) {
		let answer: { key: string; object: dataType } | undefined = undefined;
		MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
			if (findCallback(object, key)) {
				answer = { object, key };
			}
		});
		return answer;
	}
	static filter<dataType>(
		oMap: OMap<dataType>,
		callback: (object: dataType, key: string) => boolean
	) {
		let answer: OMap<dataType> = oiu.create();
		MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
			if (callback(object, key)) {
				oiu.set(answer, key, object);
			}
		});
		return answer;
	}
	static map<dataType>(oMap: OMap<dataType>, callback: (object: dataType, key: string) => any) {
		let answer: any[] = [];
		MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
			if (callback(object, key)) {
				answer.push(callback(object, key));
			}
		});
		return answer;
	}
	static toArray<dataType>(oMap: OMap<dataType> | undefined) {
		let answer: {
			objects: dataType[];
			objectsKeys: { key: string; object: dataType }[];
			keys: string[];
		} = {
			objectsKeys: [],
			objects: [],
			keys: []
		};
		if (!oMap) return answer;
		MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
			answer.objectsKeys.push({ key, object });
			answer.keys.push(key);
			answer.objects.push(object);
		});
		return answer;
	}
	static merge<dataType>(oMap: OMap<dataType>, otherObject: OMap<dataType>) {
		for (var attrname in otherObject) {
			// @ts-ignore
			oMap[attrname] = otherObject[attrname];
		}
	}
	static changeKey(oMap: object, oldKey: string, newKey: string) {
		MrkLib.changeObjectKey(oMap, oldKey, newKey);
	}
}
