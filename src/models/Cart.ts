import Item from "./Item";

export default class Cart {
  items: Item[] = [];

  constructor({
    items = [],
  }: {
    items?: Item[];
  } = {}) {
    this.items = items;
  }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    const index = this.items.findIndex((i) => i.productId === productId);

    if (index < 0) {
      //insert Item
      const id = Math.max(0, ...this.items.map((i) => i.id)) + 1;
      const item = new Item({ id, productId, quantity });

      return new Cart({
        items: [...this.items, item],
      });
    }
    //update Item
    const item = this.items[index];
    return new Cart({
      items: [
        ...this.items.slice(0, index),
        new Item({ ...item, quantity: item.quantity + quantity }),
        ...this.items.slice(index + 1),
      ],
    });
  }
}

// 도메인 모델이라고 함.
