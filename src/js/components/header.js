export default initHeader;

function initHeader() {
  $("a.top-nav-button.top-nav-button-login.primary.login.toggle-window")
    .clone()
    .html('<span class="login-header">Můj účet</span><span class="text">Přihlásit se</span>')
    .prependTo(".navigation-buttons");
  $("a.top-nav-button.top-nav-button-account.secondary").clone().prependTo(" .navigation-buttons");
  $(".right-menu").appendTo("body.desktop .navigation-in.menu");
}
