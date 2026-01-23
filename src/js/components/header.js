export default initHeader;

function initHeader() {
  $("button.top-nav-button.top-nav-button-login.toggle-window")
    .clone()
    .html('<span class="login-header">Můj účet</span><span class="text">Přihlásit se</span>')
    .prependTo(".desktop .navigation-buttons");

  $("a.top-nav-button.top-nav-button-account").clone().prependTo(" .navigation-buttons");

  const rightMenuElement = $(".right-menu");

  if (rightMenuElement.length > 0) {
    // Ulož .right-menu do session storage
    const rightMenuHtml = rightMenuElement.html();
    sessionStorage.setItem("rightMenuHtml", rightMenuHtml);

    rightMenuElement.appendTo("body.desktop .navigation-in.menu");
    rightMenuElement.appendTo("body.mobile #navigation .navigation-in");
  } else {
    // Pokud .right-menu neexistuje, vezmi si ho ze session storage
    const storedHtml = sessionStorage.getItem("rightMenuHtml");
    if (storedHtml) {
      const rightMenuClone = $("<div class='right-menu'></div>").html(storedHtml);
      rightMenuClone.appendTo("body.desktop .navigation-in.menu");
      rightMenuClone.appendTo("body.mobile #navigation .navigation-in");
    }
  }
}
