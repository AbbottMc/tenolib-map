import { AbstractMapMap } from "./AbstractMapMap";
import { SetMap } from "./SetMap";
export declare class SetMapMap<K, MK, V> extends AbstractMapMap<K, MK, V, SetMap<MK, V>> {
    protected _newChildMap(): SetMap<MK, V>;
    protected _setChildMapValue(map: SetMap<MK, V>, k: MK, v: V): void;
    deleteValue(key: K, mapKey: MK, value: V): boolean;
}
