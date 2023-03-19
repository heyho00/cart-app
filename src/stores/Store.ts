export default abstract class Store<Snapshot> {
  // 어떤게 들어올지 몰라 제네릭으로 타이핑

  //얘네는 상속 나가지않게
  protected listeners = new Set<() => void>();
  protected snapshot = {};

  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
