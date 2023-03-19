import Cart from "../models/Cart";
import Item from "../models/Item";
import Store from "./Store";

// useCartStore 에서 쓰기 때문에 정의해줌.
export type CartStoreSnapshot = {
  items: Item[];
};

export default class CartStore extends Store<CartStoreSnapshot> {
  // useSyncExternalStore 를 쓰기 때문에 대신 해줘서 지우나보다.
  // listeners = new Set<() => void>();
  // snapshot = {};

  private cart = new Cart(); // private하게 처리

  // 애들은 Store 에서 상속받으니,.
  // addListener(listener: () => void) {
  //   this.listeners.add(listener);
  // }

  // removeListener(listener: () => void) {
  //   this.listeners.delete(listener);
  // }

  // getSnapshot() {
  //   return this.snapshot;
  // }

  // publish() {
  //   this.listeners.forEach((listener) => listener());
  // }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

    // 기존 takeSnapshot, publish 따로 있던걸 한꺼번체 실행시키는 update 함수
    this.update();
  }

  update() {
    this.takeSnapshot();
    this.publish();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cart.items,
    };
  }
}
