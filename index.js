// Función para alternar el tema oscuro
function toggleDarkMode() {
  document.body.classList.toggle("dark-theme");

  const isDarkMode = document.body.classList.contains("dark-theme");
  localStorage.setItem("darkMode", isDarkMode);
}

// Cargar preferencia de tema al iniciar
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-theme");
  }

  setupInteractiveExamples();
});

function setupInteractiveExamples() {
  // Ejemplo de hover en botón
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  }

  // Ejemplo de focus en inputs
  const inputs = document.querySelectorAll("input:not([disabled])");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.backgroundColor = "#fff3cd";
    });
    input.addEventListener("blur", () => {
      input.style.backgroundColor = "";
    });
  });

  // Ejemplo de botones primario y secundario
  const primaryButton = document.querySelector(".primary-button");
  const secondaryButton = document.querySelector(".secondary-button");

  [primaryButton, secondaryButton].forEach((button) => {
    if (button) {
      button.addEventListener("mouseover", function () {
        this.style.transform = "translateY(-2px)";
        this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      });

      button.addEventListener("mouseout", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });
    }
  });
}

// Función para demostrar selectores de atributos
document.querySelectorAll('a[href^="https"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Este es un enlace seguro (HTTPS)");
  });
});

document
  .querySelectorAll('a[href^="http"]:not([href^="https"])')
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Este es un enlace no seguro (HTTP)");
    });
  });
