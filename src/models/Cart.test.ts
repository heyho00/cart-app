import Cart from "./Cart";

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("adds an item", () => {
    cart = cart.addItem({ productId: 1, quantity: 1 });

    expect(cart.items).toHaveLength(1);

    cart = cart.addItem({ productId: 2, quantity: 1 });

    expect(cart.items).toHaveLength(2);
  });
});
