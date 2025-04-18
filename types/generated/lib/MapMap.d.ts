import { AbstractMapMap } from "./AbstractMapMap";
export declare class MapMap<K, MK, V> extends AbstractMapMap<K, MK, V, Map<MK, V>> {
    protected _newChildMap(): Map<MK, V>;
    protected _setChildMapValue(map: Map<MK, V>, k: MK, v: V): void;
    deleteValue(key: K, mapKey: MK): boolean;
}
