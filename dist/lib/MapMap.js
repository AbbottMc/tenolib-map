import { AbstractMapMap } from "./AbstractMapMap";
export class MapMap extends AbstractMapMap {
    _newChildMap() {
        return new Map();
    }
    _setChildMapValue(map, k, v) {
        map.set(k, v);
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
}
