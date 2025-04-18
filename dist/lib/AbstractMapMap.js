export class AbstractMapMap extends Map {
    getValue(key, mapKey) {
        const map = this.get(key);
        if (!map)
            return undefined;
        return map.get(mapKey);
    }
    putValue(key, mapKey, value) {
        var _a;
        const map = (_a = this.get(key)) !== null && _a !== void 0 ? _a : this._newChildMap();
        this._setChildMapValue(map, mapKey, value);
        this.set(key, map);
    }
    forEachValue(callbackfn, thisArg) {
        for (const [key, map] of this) {
            for (const [mapKey, value] of map) {
                callbackfn.call(thisArg, value, mapKey, map, key, this);
            }
        }
    }
}
