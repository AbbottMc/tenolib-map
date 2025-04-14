export class BetterSet<E> extends Array<E> {
  constructor(elements?: E[]) {
    super();
    if (Array.isArray(elements)) this.push(...elements);
  }

  add(...elements: E[]) {
    for (const element of elements) {
      if (this.includes(element)) continue;
      this.push(element);
    }
    return this;
  }

  delete(element: E) {
    if (!this.includes(element)) return false;
    this.splice(this.indexOf(element), 1);
    return true;
  }
}