import {AbstractMapMap} from "./AbstractMapMap";
import {SetMap} from "./SetMap";
import {BetterSet} from "./BetterSet";

export class SetMapMap<K, MK, V> extends AbstractMapMap<K, MK, V, SetMap<MK, V>> {

  protected _newChildMap(): SetMap<MK, V> {
    return new SetMap();
  }

  protected _setChildMapValue(map: SetMap<MK, V>, k: MK, v: V): void {
    map.addValue(k, v);
  }

  deleteValue(key: K, mapKey: MK, value: V) {
    const map = this.get(key);
    if (!map) return false;
    const isSucceed = map.deleteValue(mapKey, value);
    if (map.size > 0) {
      this.set(key, map);
    } else {
      this.delete(key);
    }
    return isSucceed;
  }

  getValueAt(key: K, mapKey: MK, index: number) {
    const map = this.get(key);
    if (!map) return undefined;
    return map.getAt(mapKey, index);
  }

  forEachValue(callback: (value: V, childSet: BetterSet<V>, index: number, mapKey: MK, childMap: SetMap<MK, V>, key: K, mapMap: this) => void, thisArg?: any) {
    this.forEach((childMap, key) => {
      childMap.forEach((valueSet, mapKey) => {
        valueSet.forEach((value, index) => {
          callback.call(thisArg, value, valueSet, index, mapKey, childMap, key, this);
        });
      });
    });
  }
}