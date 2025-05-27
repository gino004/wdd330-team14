import { renderListWithTemplate } from "./utils.mjs";

// Template para cada producto en el carrito
function cartItemTemplate(product) {
	return `
    <li class="cart-item">
      <img src="${product.Image}" alt="${product.Name}">
      <h2>${product.Brand?.Name || ""}</h2>
      <h3>${product.Name}</h3>
      <p class="cart-item__price">$${product.FinalPrice}</p>
    </li>
  `;
}

export default class ShoppingCart {
	constructor(listElement) {
		this.listElement = listElement;
	}

	// Obtiene los productos del carrito desde localStorage
	getCartItems() {
		return JSON.parse(localStorage.getItem("so-cart")) || [];
	}

	// Renderiza el carrito usando el template
	renderCart() {
		const cartItems = this.getCartItems();
		renderListWithTemplate(cartItemTemplate, this.listElement, cartItems);
	}
}