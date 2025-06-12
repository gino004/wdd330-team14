import { getLocalStorage } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = getLocalStorage("so-cart") || [];
  const cartElement = document.querySelector("#cart-list"); // assumes <ul class="cart-list"></ul>
  const cart = new ShoppingCart(cartElement, cartItems);
  cart.init();
});
