import { renderListWithTemplate } from "./utils.mjs";

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "N/A"}</p>
      <p class="cart-card__quantity">qty: ${item.qty || 1}</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>
  `;
}

export default class ShoppingCart {
  constructor(listElement, items) {
    if (typeof listElement === "string") {
      this.listElement = document.querySelector(listElement);
    } else {
      this.listElement = listElement;
    }
    this.items = items;
  }

  init() {
    this.renderCart();
    this.renderTotal();
  }

  renderCart() {
    renderListWithTemplate(cartItemTemplate, this.listElement, this.items);
  }

  renderTotal() {
    if (this.items.length > 0) {
      const total = this.items
        .reduce((sum, item) => sum + Number(item.FinalPrice) * (item.qty || 1), 0)
        .toFixed(2);

      const totalPrice = document.querySelector(".cart-totalPrice");
      totalPrice.classList.remove("hide");
      totalPrice.querySelector(".cart-total").textContent = `Total: $${total}`;
    }
  }
}