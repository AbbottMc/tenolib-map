import {BetterSet} from './BetterSet'

export class SetMap<K, V> extends Map<K, BetterSet<V>> {
  constructor(entries?: readonly (readonly [K, V[]])[] | null) {
    super(entries?.map(([key, values]) => [key, new BetterSet(values)]));
  }

  addValue(key: K, value: V): this {
    const eleSet = this.get(key) ?? new BetterSet<V>();
    eleSet.add(value);
    this.set(key, eleSet);
    return this;
  }

  deleteValue(key: K, value: V): boolean {
    const eleSet = this.get(key);
    if (!eleSet) return false;
    const isSucceed = eleSet.delete(value);
    if (eleSet.length > 0) {
      this.set(key, eleSet);
    } else {
      this.delete(key);
    }
    return isSucceed;
  }

  getAt(key: K, index: number): V | undefined {
    const eleSet = this.get(key);
    if (!eleSet) return undefined;
    return eleSet.at(index);
  }

  forEachValue(callback: (value: V, key: K, index: number) => void) {
    this.forEach((eleSet, key) => {
      eleSet.forEach((element, index) => callback(element, key, index));
    });
  }

  forEachSet(callback: (valueSet: BetterSet<V>, key: K, map: Map<K, BetterSet<V>>) => void) {
    this.forEach(callback);
  }
}