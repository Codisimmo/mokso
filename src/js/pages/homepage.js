export default initHomePage;

function initHomePage() {
  const articleWrap = $('<div class="homepage-articles-wrapper row blog-wrapper"></div>').appendTo(".homepage-blog-wrapper.row.blog-wrapper");
  $(".news-item").appendTo(articleWrap);

  $(".footer-banners.row.banner-wrapper").addClass("container").insertAfter(".content-wrapper.homepage-box.before-carousel");

  $(".footer-banners.row.banner-wrapper").addClass("container").insertAfter(".mobile div#carousel");

  $(".in-index .homepage-articles-wrapper.row.blog-wrapper").slick({
    centerMode: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
