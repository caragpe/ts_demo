export class Cache<T> {
  private store: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.store.set(key, value);
  }

  get(key: string): T | undefined {
    return this.store.get(key);
  }
}
