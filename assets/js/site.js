$(function () {
  $(".top-faq_qFlex").on("click", function () {
    $("top-faq_qFlex--symbol:first-of-type").addClass("open");
    // $("this).parent().next(").slideToggle(300);
    $(this).next('.top-faq_ans').slideToggle();
    // $(this).toggleClass("open");
    // $('.top-faq_qFlex--symbol').toggleClass("open");
  });
});

// $(function () {
//   // 最初のコンテンツは表示
//   $(".accordion-item:first-of-type .accordion-content").css("display", "block");
//   // 最初の矢印は開いた時の状態に
//   $(".accordion-item:first-of-type .js-accordion-title").addClass("open");
//   // タイトルをクリックすると
//   $(".js-accordion-title").on("click", function () {
//     // クリックした次の要素を開閉
//     $(this).next().slideToggle(300);
//     // タイトルにopenクラスを付け外しして矢印の向きを変更
//     $(this).toggleClass("open", 300);
//   });
// });

// $(function () {
//   // 最初のコンテンツは表示
//   $(".top-faq_item:first-of-type .top-faq_ans").css("display", "block");
//   // 最初の矢印は開いた時の状態に
//   $(".accordion-item:first-of-type .top-faq_qFlex--symbol").addClass("open");
//   // タイトルをクリックすると
//   $(".js-accordion-title").on("click", function () {
//     // クリックした次の要素を開閉
//     $(this).next().slideToggle(300);
//     // タイトルにopenクラスを付け外しして矢印の向きを変更
//     $(this).toggleClass("open", 300);
//   });
// });

// $(document).ready(function () {
//   // $('.bl_accordionTitle.active').next().show();
//   $(".bl_accordionTitle").on("click", function () {
//     $(this).next().slideToggle();
//     $(this).toggleClass("active");
//   });
// });
