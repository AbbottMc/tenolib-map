import {AbstractMapMap} from "./AbstractMapMap";

export class MapMap<K, MK, V> extends AbstractMapMap<K, MK, V, V, Map<MK, V>> {

  protected _newChildMap(): Map<MK, V> {
    return new Map<MK, V>();
  }

  protected _setChildMapValue(map: Map<MK, V>, k: MK, v: V): void {
    map.set(k, v);
  }

  deleteValue(key: K, mapKey: MK) {
    const map = this.get(key);
    if (!map) return false;
    const isSucceed = map.delete(mapKey);
    if (map.size > 0) {
      this.set(key, map);
    } else {
      this.delete(key);
    }
    return isSucceed;
  }
}