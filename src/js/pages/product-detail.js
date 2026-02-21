export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  // Schovej social buttons na detailu produktu
  $(".social-buttons-wrapper, .link-icons[data-testid='productDetailActionIcons'], .social-buttons").hide();
}