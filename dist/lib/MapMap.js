export class MapMap extends Map {
    constructor() {
        super();
    }
    getAt(key, mapKey) {
        const map = this.get(key);
        if (!map)
            return undefined;
        return map.get(mapKey);
    }
    setValue(key, mapKey, value) {
        var _a;
        const map = (_a = this.get(key)) !== null && _a !== void 0 ? _a : new Map();
        map.set(mapKey, value);
        this.set(key, map);
    }
    deleteValue(key, mapKey) {
        const map = this.get(key);
        if (!map)
            return false;
        const isSucceed = map.delete(mapKey);
        if (map.size > 0) {
            this.set(key, map);
        }
        else {
            this.delete(key);
        }
        return isSucceed;
    }
    forEachValue(callbackfn, thisArg) {
        for (const [key, map] of this) {
            for (const [mapKey, value] of map) {
                callbackfn.call(thisArg, value, mapKey, map, key, this);
            }
        }
    }
}
