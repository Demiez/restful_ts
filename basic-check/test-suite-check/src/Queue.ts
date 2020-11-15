export class Queue<T> {
  private _store: T[] = [];

  constructor(initialData: Array<T> = []) {
    this._store.push(...initialData);
  }

  public push(val: T) {
    this._store.push(val);
  }

  public pop(): T | undefined {
    return this._store.shift();
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this._store.length;
  }
}
