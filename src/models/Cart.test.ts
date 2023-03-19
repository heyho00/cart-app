import Cart from "./Cart";
import Item from "./Item";

const context = describe;

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  context("같은 상품이 장바구니에 없을때", () => {
    it("adds an item", () => {
      const productIds = [1, 2, 3];

      cart = productIds.reduce(
        (prevCart, productId) => prevCart.addItem({ productId, quantity: 1 }),
        cart
      );

      expect(cart.items).toHaveLength(3);
    });
  });

  context("같은 상품이 장바구니에 있을때", () => {
    it("adds an item", () => {
      const productId = 1;
      const quantities = [1, 2, 3];

      cart = quantities.reduce(
        (prevCart, quantity) => prevCart.addItem({ productId, quantity }),
        cart
      );
      expect(cart.items).toHaveLength(1);
      expect(cart.items).toEqual([
        new Item({
          id: 1,
          productId,
          quantity: quantities.reduce((a, b) => a + b),
        }),
      ]);
    });
  });
});
