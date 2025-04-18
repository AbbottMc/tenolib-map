export class MapMap<K, MK, V> extends Map<K, Map<MK, V>> {
  constructor() {
    super();
  }

  getAt(key: K, mapKey: MK): V | undefined {
    const map = this.get(key);
    if (!map) return undefined;
    return map.get(mapKey);
  }

  setValue(key: K, mapKey: MK, value: V) {
    const map = this.get(key) ?? new Map<MK, V>();
    map.set(mapKey, value);
    this.set(key, map);
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

  forEachValue(callbackfn: (value: V, mapKey: MK, childMap: Map<MK, V>, key: string, mapMap: MapMap<K, MK, V>) => void, thisArg?: any) {
    for (const [key, map] of this) {
      for (const [mapKey, value] of map) {
        callbackfn.call(thisArg, value, mapKey, map, key, this);
      }
    }
  }
}