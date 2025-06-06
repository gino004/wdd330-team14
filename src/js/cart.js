import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  //TOTAL $ IN CART
  if (cartItems.length > 0) {
    // Show the cart-Total$
    const totalPrice = document.querySelector(".cart-totalPrice");
    totalPrice.classList.remove("hide");

    // Calculate total
    const total = cartItems
      .reduce((sum, item) => sum + Number(item.FinalPrice), 0)
      .toFixed(2);

    // Display total
    totalPrice.querySelector(".cart-total").textContent = `Total: $${total}`;
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>
<div>
  <p class="cart-total">Total: </p>
</div>`;
  return newItem;
}

renderCartContents();
