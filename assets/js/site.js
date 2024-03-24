$(function () {
  $(".top-faq_qFlex--symbol").on("click", function () {
    $(this).parent().next().slideToggle(300);
    $(this).toggleClass("open");
  });
});