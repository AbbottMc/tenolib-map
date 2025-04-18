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
}
