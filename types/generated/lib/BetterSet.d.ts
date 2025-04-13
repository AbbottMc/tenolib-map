export declare class BetterSet<E> extends Array<E> {
    constructor(elements?: E[]);
    add(...elements: E[]): this;
    delete(element: E): boolean;
}
