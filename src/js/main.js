import Alert from "./alert.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

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

document.addEventListener("DOMContentLoaded", showWelcomeModal);
