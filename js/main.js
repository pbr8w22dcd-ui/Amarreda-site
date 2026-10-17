(() => {
  const config = window.AMARREDA_CONFIG || {};
  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = config.brand || "Amarreda");
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = config.email || "ciao@amarreda.it";
    if (el.tagName === "A") el.href = "mailto:" + (config.email || "ciao@amarreda.it");
  });
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#configurator-form");
  if (form) {
    const result = document.querySelector("#estimate-result");
    const fileInput = document.querySelector("#plan-file");
    const fileName = document.querySelector("#file-name");
    const budget = document.querySelector("#budget");
    const brandSelect = document.querySelector("#brand-choice");
    const lengthInput = document.querySelector("#linear-meters");
    const styleInput = document.querySelector("#style-choice");
    const priorities = document.querySelector("#priorities");
    const compare = document.querySelector("#comparison-results");
    if (fileInput && fileName) fileInput.addEventListener("change", () => {
      fileName.textContent = fileInput.files && fileInput.files[0]
        ? "File selezionato: " + fileInput.files[0].name + ". In questa demo non viene analizzato."
        : "Nessun file selezionato.";
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      const catalog = window.AMARREDA_CATALOG || [];
      const selected = catalog.find(item => item.id === brandSelect.value) || catalog[0];
      const meters = Math.max(2, Math.min(8, Number(lengthInput.value) || 3.5));
      const euro = n => n.toLocaleString("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
      const min = Math.round(selected.base * (meters / 3.5) * .82);
      const max = Math.round(selected.base * (meters / 3.5) * 1.34);
      result.innerHTML = `<div class="estimate-top"><span class="eyebrow">STIMA DIMOSTRATIVA</span><span class="estimate-tag">Non è un preventivo</span></div>
        <h3>${selected.name} · ${styleInput.value}</h3>
        <p>Per una composizione indicativa di ${meters.toLocaleString("it-IT")} metri lineari, la fascia simulata è:</p>
        <div class="estimate-number">${euro(min)} – ${euro(max)}</div>
        <p class="small-note">Valori fittizi per la demo. Non sono listini ufficiali e potrebbero non includere elettrodomestici, posa, trasporto o opere edili. Budget indicato: ${budget.value}.</p>
        ${priorities.value ? `<p><strong>Le tue priorità:</strong> ${priorities.value.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}</p>` : ""}
        <a class="button button-dark" href="pages/premium.html">Scopri il percorso Premium ↗</a>`;
      result.hidden = false;
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
      if (compare) {
        compare.innerHTML = catalog.filter(item => item.id !== selected.id).map(item => `
          <article class="mini-option"><span class="eyebrow">${item.level}</span><h4>${item.name}</h4><p>${item.description}</p>
          <strong>${euro(Math.round(item.base * (meters / 3.5) * .82))} – ${euro(Math.round(item.base * (meters / 3.5) * 1.34))}</strong>
          <span class="small-note">Fascia demo, non ufficiale</span></article>`).join("");
        compare.hidden = false;
      }
    });
  }
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = document.querySelector("#contact-message");
    if (message) message.textContent = "Grazie! Questo modulo è dimostrativo: per ricevere messaggi reali occorre collegare un servizio di invio.";
  });
})();
