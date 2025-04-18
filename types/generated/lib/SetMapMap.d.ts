import { AbstractMapMap } from "./AbstractMapMap";
import { SetMap } from "./SetMap";
import { BetterSet } from "./BetterSet";
export declare class SetMapMap<K, MK, V> extends AbstractMapMap<K, MK, V, SetMap<MK, V>> {
    protected _newChildMap(): SetMap<MK, V>;
    protected _setChildMapValue(map: SetMap<MK, V>, k: MK, v: V): void;
    deleteValue(key: K, mapKey: MK, value: V): boolean;
    getValueAt(key: K, mapKey: MK, index: number): V;
    forEachValue(callback: (value: V, childSet: BetterSet<V>, index: number, mapKey: MK, childMap: SetMap<MK, V>, key: K, mapMap: this) => void, thisArg?: any): void;
}
