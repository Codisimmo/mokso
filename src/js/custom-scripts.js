// src/js/custom-scripts.js
export const initCustomScripts = () => {
  const hidePwSignature = () => {
    document.querySelectorAll('div[id^="pwjsroot"]').forEach(root => {
      if (root.shadowRoot) {
        root.shadowRoot.querySelectorAll('p').forEach(p => {
          if (p.innerText.includes('Vytvořeno v aplikaci')) {
            p.style.display = 'none';
          }
        });
      }
    });
  };
  hidePwSignature();
  const observer = new MutationObserver(hidePwSignature);
  observer.observe(document.body, { childList: true, subtree: true });
};