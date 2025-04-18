export declare class MapMap<K, MK, V> extends Map<K, Map<MK, V>> {
    constructor();
    getAt(key: K, mapKey: MK): V | undefined;
    setValue(key: K, mapKey: MK, value: V): void;
    deleteValue(key: K, mapKey: MK): boolean;
    forEachValue(callbackfn: (value: V, mapKey: MK, childMap: Map<MK, V>, key: string, mapMap: MapMap<K, MK, V>) => void, thisArg?: any): void;
}
