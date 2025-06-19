import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

//const cartItems = getLocalStorage("so-cart") || [];
//const cartElement = document.querySelector(".product-list"); // or "#cart-list" based on your HTML

//const cart = new ShoppingCart(cartElement, cartItems);
//cart.init();

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = getLocalStorage("so-cart") || [];
    const cartElement = document.querySelector("#cart-list"); // assumes <ul class="cart-list"></ul>
    const cart = new ShoppingCart(cartElement, cartItems);
    cart.init();
  });