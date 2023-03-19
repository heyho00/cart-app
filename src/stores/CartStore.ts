import Cart from "../models/Cart";

export default class CartStore {
  listeners = new Set<() => void>();

  snapshot = {};

  cart = new Cart();

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

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

    // 상태를 저장하고
    // 변경을 알린다.   두 가지 로직이 필요.

    this.snapshot = {
      items: this.cart.items,
    };
    this.publish();
  }
}
