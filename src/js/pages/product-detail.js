export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  // Přesun hodnocení (hvězdy + počet) pod krátký popis
  const $rating = $(".p-detail-rating, .rating-wrapper, .stars-wrapper").first();
  const $desc = $(".p-short-description, .p-detail-info .perex, .p-detail-info").first();

  if ($rating.length && $desc.length) {
    $rating.insertAfter($desc);
  }
}