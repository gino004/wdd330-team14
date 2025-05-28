import Alert from "./alert.mjs";

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
