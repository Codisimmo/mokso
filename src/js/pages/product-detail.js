export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");
}