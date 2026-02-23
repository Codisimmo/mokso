(() => {
  // src/js/components/header.js
  var header_default = initHeader;
  function initHeader() {
    $("button.top-nav-button.top-nav-button-login.toggle-window").clone().html('<span class="login-header">M\u016Fj \xFA\u010Det</span><span class="text">P\u0159ihl\xE1sit se</span>').prependTo(".desktop .navigation-buttons");
    $("a.top-nav-button.top-nav-button-account").clone().prependTo(" .navigation-buttons");
    const rightMenuElement = $(".right-menu");
    if (rightMenuElement.length > 0) {
      const rightMenuHtml = rightMenuElement.html();
      sessionStorage.setItem("rightMenuHtml", rightMenuHtml);
      rightMenuElement.appendTo("body.desktop .navigation-in.menu");
      rightMenuElement.appendTo("body.mobile #navigation .navigation-in");
    } else {
      const storedHtml = sessionStorage.getItem("rightMenuHtml");
      if (storedHtml) {
        const rightMenuClone = $("<div class='right-menu'></div>").html(storedHtml);
        rightMenuClone.appendTo("body.desktop .navigation-in.menu");
        rightMenuClone.appendTo("body.mobile #navigation .navigation-in");
      }
    }
  }

  // src/js/components/footer.js
  var footer_default = initFooter;
  function initFooter() {
  }

  // src/js/pages/homepage.js
  var homepage_default = initHomePage;
  function initHomePage() {
    const articleWrap = $('<div class="homepage-articles-wrapper row blog-wrapper"></div>').appendTo(".homepage-blog-wrapper.row.blog-wrapper");
    $(".news-item").appendTo(articleWrap);
    $(".footer-banners.row.banner-wrapper").addClass("container").insertAfter(".content-wrapper.homepage-box.before-carousel");
    $(".footer-banners.row.banner-wrapper").addClass("container").insertAfter(".mobile div#carousel");
    $(".blog-wrapper .homepage-group-title.h4").text("Magaz\xEDn");
    $(".in-index .homepage-articles-wrapper.row.blog-wrapper").slick({
      centerMode: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 3e3,
      responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  // src/js/pages/category.js
  var category_default = initCategory;
  function initCategory() {
  }

  // src/js/pages/product-detail.js
  var product_detail_default = initProductDetailPage;
  function initProductDetailPage() {
    $(".products.products-block.products-related.products-additional.p-switchable").insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");
    $("h2.products-related-header").insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");
    const $benefit = $(".benefitBanner.position--benefitProduct").first();
    const $target = $(".p-info-wrapper .p-short-description").first();
    if ($benefit.length && $target.length) {
      $benefit.insertAfter($target);
    }
  }

  // src/js/components/product.js
  var product_default = initProduct;
  function initProduct() {
  }

  // src/js/pages/cart.js
  var cart_default = initCart;
  function initCart() {
  }

  // src/js/pages/article.js
  var article_default = initArticle;
  function initArticle() {
  }

  // src/js/pages/registration.js
  var registration_default = initRegistration;
  function initRegistration() {
  }

  // src/js/components/map.js
  var map_default = initMap;
  function initMap() {
  }

  // src/js/main.js
  console.log("Custom JS loadesw");
  window.addEventListener("DOMContentLoaded", () => {
    header_default();
    footer_default();
    homepage_default();
    category_default();
    cart_default();
    article_default();
    registration_default();
    product_detail_default();
    product_default();
    map_default();
    initCustomScripts();
  });
})();
