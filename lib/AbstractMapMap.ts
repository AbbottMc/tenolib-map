export abstract class AbstractMapMap<K, MK, MV, V, MT extends Map<MK, MV>> extends Map<K, MT> {
  protected abstract _newChildMap(): MT;

  protected abstract _setChildMapValue(map: MT, k: MK, v: V): void;

  getChild(key: K, mapKey: MK): MV | undefined {
    const map = this.get(key);
    if (!map) return undefined;
    return map.get(mapKey);
  }

  putValue(key: K, mapKey: MK, value: V) {
    const map = this.get(key) ?? this._newChildMap();
    this._setChildMapValue(map, mapKey, value);
    this.set(key, map);
  }

  forEachChild(callbackfn: (value: V, mapKey: MK, childMap: Map<MK, V>, key: string, mapMap: this) => void, thisArg?: any) {
    for (const [key, map] of this) {
      for (const [mapKey, value] of map) {
        callbackfn.call(thisArg, value, mapKey, map, key, this);
      }
    }
  }
}