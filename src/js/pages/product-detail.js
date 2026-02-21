export default initProductDetailPage;

function initProductDetailPage() {
  $(".products.products-block.products-related.products-additional.p-switchable")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  $("h2.products-related-header")
    .insertAfter(".shp-tabs-wrapper.p-detail-tabs-wrapper");

  // --- Hodnocení pod popis (přesun #ratingWrapper) ---
  const tryMoveRating = () => {
    const $desc = $(".p-short-description, .p-detail-info .perex, .p-detail-info").first();
    const $ratingWrapper = $("#ratingWrapper").first();

    if (!$desc.length || !$ratingWrapper.length) return false;

    // už vloženo?
    if ($ratingWrapper.closest(".rating-under-description").length) return true;

    // vlož wrapper pod popis a přesun hodnocení dovnitř
    const $wrap = $("<div class='rating-under-description'></div>").insertAfter($desc);
    $wrap.append($ratingWrapper);

    // vynutit zobrazení (kdyby tab styly něco skrývaly)
    $ratingWrapper.show();

    // tab "Hodnocení" schovat až po úspěšném přesunu
    $("li.shp-tab[data-testid='tabRating']").hide();

    return true;
  };

  // 1) hned po DOMContentLoaded
  if (tryMoveRating()) return;

  // 2) pár pokusů po sobě (Shoptet občas domontuje později)
  let tries = 0;
  const interval = setInterval(() => {
    tries += 1;
    if (tryMoveRating() || tries >= 20) clearInterval(interval); // ~2s
  }, 100);
}