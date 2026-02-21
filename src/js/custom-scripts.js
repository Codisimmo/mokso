document.addEventListener("DOMContentLoaded", function () {
  function hidePwSignature() {
    document.querySelectorAll('div[id^="pwjsroot"]').forEach(function (root) {
      if (!root.shadowRoot) return;

      root.shadowRoot.querySelectorAll("p").forEach(function (p) {
        if (p.innerText.includes("Vytvořeno v aplikaci")) {
          p.style.display = "none";
        }
      });
    });
  }

  hidePwSignature();

  var observer = new MutationObserver(hidePwSignature);
  observer.observe(document.body, { childList: true, subtree: true });
});