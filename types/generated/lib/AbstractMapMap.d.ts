export declare abstract class AbstractMapMap<K, MK, MV, V, MT extends Map<MK, MV>> extends Map<K, MT> {
    protected abstract _newChildMap(): MT;
    protected abstract _setChildMapValue(map: MT, k: MK, v: V): void;
    getChild(key: K, mapKey: MK): MV | undefined;
    putValue(key: K, mapKey: MK, value: V): void;
    forEachChild(callbackfn: (value: V, mapKey: MK, childMap: Map<MK, V>, key: string, mapMap: this) => void, thisArg?: any): void;
}
