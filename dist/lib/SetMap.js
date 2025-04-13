import { BetterSet } from './BetterSet';
export class SetMap extends Map {
    constructor(entries) {
        super(entries === null || entries === void 0 ? void 0 : entries.map(([key, values]) => [key, new BetterSet(values)]));
    }
    addValue(key, value) {
        var _a;
        const eleSet = (_a = this.get(key)) !== null && _a !== void 0 ? _a : new BetterSet();
        eleSet.add(value);
        this.set(key, eleSet);
        return this;
    }
    deleteValue(key, value) {
        const eleSet = this.get(key);
        if (!eleSet)
            return false;
        const isSucceed = eleSet.delete(value);
        if (eleSet.length > 0) {
            this.set(key, eleSet);
        }
        else {
            this.delete(key);
        }
        return isSucceed;
    }
    getAt(key, index) {
        const eleSet = this.get(key);
        if (!eleSet)
            return undefined;
        return eleSet.at(index);
    }
    forEachValue(callback) {
        this.forEach((eleSet, key) => {
            eleSet.forEach((element, index) => callback(element, key, index));
        });
    }
    forEachSet(callback) {
        this.forEach(callback);
    }
}
