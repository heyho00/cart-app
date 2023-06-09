import Item from "../models/Item";
import CartStore from "./CartStore";

test("CartStore", () => {
  const cartStore = new CartStore();

  const handleChange = jest.fn();
  cartStore.addListener(handleChange);
  cartStore.addItem({ productId: 1, quantity: 1 });

  expect(handleChange).toBeCalled();
  expect(cartStore.getSnapshot()).toEqual({
    items: [new Item({ id: 1, productId: 1, quantity: 1 })],
  });
});
