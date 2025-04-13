import { BetterSet } from './BetterSet';
export declare class SetMap<K, V> extends Map<K, BetterSet<V>> {
    constructor(entries?: readonly (readonly [K, V[]])[] | null);
    addValue(key: K, value: V): this;
    deleteValue(key: K, value: V): boolean;
    getAt(key: K, index: number): V | undefined;
    forEachValue(callback: (value: V, key: K, index: number) => void): void;
    forEachSet(callback: (valueSet: BetterSet<V>, key: K, map: Map<K, BetterSet<V>>) => void): void;
}
