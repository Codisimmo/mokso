export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");
  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  // Přesun benefit banneru vedle produktu (pravý sloupec) pod perex
  const $benefit = $(".benefitBanner.position--benefitProduct").first();
  const $target = $(".p-info-wrapper .p-short-description").first();

  if ($benefit.length && $target.length) {
    $benefit.insertAfter($target);
  }
}