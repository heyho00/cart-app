import Cart from "../models/Cart";
import Item from "../models/Item";
import Store from "./Store";

export type CartStoreSnapshot = {
  items: Item[];
};

export default class CartStore extends Store<CartStoreSnapshot> {
  private cart = new Cart();

  // 초기값이 없기 때문에 에러났다.
  // constructor로 부모 클래스에 전달해서 빈 객체를 만들어줘야한다.
  constructor() {
    super();
    this.takeSnapshot();
  }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

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
