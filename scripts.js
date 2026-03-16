function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = (el.dataset.lang === lang) ? "inline" : "none";
  });
}

function initLang() {
  let lang = localStorage.getItem("lang") || (navigator.language.startsWith("pt") ? "pt" : "en");
  setLang(lang);
}

window.onload = initLang;
