import initHeader from "./components/header.js";
import initFooter from "./components/footer.js";
import initHomePage from "./pages/homepage.js";
import initCategory from "./pages/category.js";
import initProductDetailPage from "./pages/product-detail.js";
import initProduct from "./components/product.js";
import initCart from "./pages/cart.js";
import initArticle from "./pages/article.js";
import initRegistration from "./pages/registration.js";
import initMap from "./components/map.js";
import { initCustomScripts } from "./custom-scripts.js";

console.log("Custom JS loadesw");

const retinaImages = () => {
  const productsDataSrcImages = [...document.querySelectorAll(".products img[data-src]")];

  const replaceAttributeValue = (img, attributeName) => {
    const attributeValue = img.getAttribute(attributeName);
    img.setAttribute(attributeName, attributeValue.replace("/detail/", "/big/"));
  };

  productsDataSrcImages.forEach((img) => {
    replaceAttributeValue(img, "src");
    replaceAttributeValue(img, "data-src");
  });
};

const debugImages = () => {
  const shopImages = document.querySelectorAll("img");
  if (shopImages) {
    shopImages.forEach((image) => {
      const imageSrc = image.getAttribute("src");

      if (imageSrc && !imageSrc.includes("data:")) {
        let srcParametersChar = "?";
        if (imageSrc.includes("?")) {
          srcParametersChar = "&";
        }
        image.setAttribute("src", `${imageSrc}${srcParametersChar}v=${Date.now()}`);
      }
    });
  }
};

// Init app
window.addEventListener("DOMContentLoaded", () => {
  //   retinaImages();
  initCustomScripts();
  initHeader();
  initFooter();
  initHomePage();
  initCategory();
  initCart();
  initArticle();
  initRegistration();
  initProductDetailPage();
  initProduct();
  //   debugImages();
  initMap();
});
