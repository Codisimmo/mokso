export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  // Vloží výhody do místa, kde byly ikonky (kotva)
  const $anchor = $(
    ".link-icons[data-testid='productDetailActionIcons'], .social-buttons-wrapper, .social-buttons"
  ).first();

  if ($anchor.length && $(".product-benefits").length === 0) {
    const benefitsHtml = `
      <div class="product-benefits" aria-label="Výhody produktu">
        <div class="product-benefits__item">
          <span class="product-benefits__icon" aria-hidden="true">🌿</span>
          <div class="product-benefits__text">BIO</div>
        </div>

        <div class="product-benefits__item">
          <span class="product-benefits__icon" aria-hidden="true">🚚</span>
          <div class="product-benefits__text">Rychlé doručení</div>
        </div>

        <div class="product-benefits__item">
          <span class="product-benefits__icon" aria-hidden="true">✅</span>
          <div class="product-benefits__text">Ověřená kvalita</div>
        </div>
      </div>
    `;

    $anchor.after(benefitsHtml);
  }
}