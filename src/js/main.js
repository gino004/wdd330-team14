import Alert from "./alert.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

const alertInstance = new Alert("/json/alerts.json");

alertInstance.render();

function showWelcomeModal() {
  const modalShown = localStorage.getItem("welcome-modal-shown");

  if (!modalShown) {
    const modal = document.getElementById("welcome-modal");
    modal.classList.remove("hidden");

    document.querySelector(".close-button").addEventListener("click", () => {
      modal.classList.add("hidden");
      localStorage.setItem("welcome-modal-shown", "true");
    });
  }
}

// Call this when the page loads
document.addEventListener("DOMContentLoaded", showWelcomeModal);

productList.init();
