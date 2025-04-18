import { AbstractMapMap } from "./AbstractMapMap";
import { SetMap } from "./SetMap";
export class SetMapMap extends AbstractMapMap {
    _newChildMap() {
        return new SetMap();
    }
    _setChildMapValue(map, k, v) {
        map.addValue(k, v);
    }
    deleteValue(key, mapKey, value) {
        const map = this.get(key);
        if (!map)
            return false;
        const isSucceed = map.deleteValue(mapKey, value);
        if (map.size > 0) {
            this.set(key, map);
        }
        else {
            this.delete(key);
        }
        return isSucceed;
    }
    getValueAt(key, mapKey, index) {
        const map = this.get(key);
        if (!map)
            return undefined;
        return map.getAt(mapKey, index);
    }
    forEachValue(callback, thisArg) {
        this.forEach((childMap, key) => {
            childMap.forEach((valueSet, mapKey) => {
                valueSet.forEach((value, index) => {
                    callback.call(thisArg, value, valueSet, index, mapKey, childMap, key, this);
                });
            });
        });
    }
}
