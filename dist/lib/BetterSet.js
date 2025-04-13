export class BetterSet extends Array {
    constructor(elements) {
        super();
        if (elements)
            this.push(...elements);
    }
    add(...elements) {
        for (const element of elements) {
            if (this.includes(element))
                continue;
            this.push(element);
        }
        return this;
    }
    delete(element) {
        if (!this.includes(element))
            return false;
        this.splice(this.indexOf(element), 1);
        return true;
    }
}
