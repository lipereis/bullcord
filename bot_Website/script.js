document.addEventListener("DOMContentLoaded", () => {
  // Navegação Suave
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }) ||
        (window.location.href = href);
    });
  });

  // Formulário de Contato
  const form = document.querySelector("#support-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const [name, email, message] = ["name", "email", "message"].map(
        (id) => form.querySelector(`#${id}`).value
      );
      if (name && email && message) {
        window.location.href = `mailto:suporte@bullcord.com?subject=Suporte - ${name}&body=${message}%0D%0AEnviado por: ${email}`;
        form.reset();
      } else alert("Preencha todos os campos!");
    });
  }

  // Loader
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loader);
  window.addEventListener("load", () => (loader.style.display = "none"));

  // Contador de Visitas
  let visits = localStorage.getItem("bullcordVisits") || 0;
  visits = parseInt(visits) + 1;
  localStorage.setItem("bullcordVisits", visits);
  if (document.querySelector(".content")) {
    document
      .querySelector(".content")
      .insertAdjacentHTML(
        "beforeend",
        `<p id="visit-count">Visitas: ${visits}</p>`
      );
  }
});
