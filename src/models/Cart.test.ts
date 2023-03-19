import Cart from "./Cart";

const context = describe;

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  context("같은 상품이 장바구니에 없을때", () => {
    it("adds an item", () => {
      cart = cart.addItem({ productId: 1, quantity: 1 });

      expect(cart.items).toHaveLength(1);

      cart = cart.addItem({ productId: 2, quantity: 1 });

      expect(cart.items).toHaveLength(2);
    });
  });

  context("같은 상품이 장바구니에 있을때", () => {
    it("adds an item", () => {
      cart = cart.addItem({ productId: 1, quantity: 1 });

      expect(cart.items).toHaveLength(1);

      cart = cart.addItem({ productId: 1, quantity: 1 });

      expect(cart.items).toHaveLength(1);
    });
  });
});
