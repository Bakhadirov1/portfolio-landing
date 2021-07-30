$(function () {
  const lang_ru_en = $(".lang_ru, .lang_en");
  const burger = $(".header__burger-btn");
  const burgerContainer = $(".header__burger");
  const nav = $(".navig");
  const close = $(".header__close-menu-btn");
  const closeContainer = $(".header__close-menu");

  const langChanger = $(".header__lang");


  lang_ru_en.on("click", function () {
    if ($(this).hasClass("inactive")) {
      lang_ru_en.toggleClass("inactive");
    }
  });

  burger.on("click", function () {
    nav.addClass("navig-active");
    burgerContainer.addClass("d-none");
    closeContainer.removeClass("d-none");
    langChanger.toggleClass("lang-active");
  });

  close.on("click", function () {
    nav.removeClass("navig-active");
    closeContainer.addClass("d-none");
    burgerContainer.removeClass("d-none");
    langChanger.toggleClass("lang-active");

  });
});
