export declare abstract class AbstractMapMap<K, MK, V, MT extends Map<MK, any>> extends Map<K, MT> {
    protected abstract _newChildMap(): MT;
    protected abstract _setChildMapValue(map: MT, k: MK, v: V): void;
    getValue(key: K, mapKey: MK): V | undefined;
    putValue(key: K, mapKey: MK, value: V): void;
    forEachValue(callbackfn: (value: V, mapKey: MK, childMap: Map<MK, V>, key: string, mapMap: this) => void, thisArg?: any): void;
}
