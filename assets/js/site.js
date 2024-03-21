
$(function () {
    // レスポンシブメニュー開閉
    $(".js-accordion-title").on("click", function () {
        $(this).parent().next().slideToggle(300);
        $(this).toggleClass("open");
       
    });

    $('.js_header_hamburger').click(function () {
        $('.header-hamburger_line').toggleClass('active');
        $('.header-sp_accordion').toggleClass("open", 300);
        $('.header-tel').toggleClass("open");
        
        if($('.header-hamburger_line').hasClass("active")){
            $('body').addClass('stop');
        }else{
            $('body').removeClass('stop');
        }
    });

    $('.header-hamburger').on('click', function () {
        $('.header-sp_accordion').slideToggle();
    });

    $("#js-pagetop").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});


const inviewFunc = () => {
    // 下からフェードイン用
    $(".js-fadeBottom").on("inview", function () {
      $(this).addClass("inview");
    });
    // 上からフェードイン用
    $(".js-fadeTop").on("inview", function () {
      $(this).addClass("inview");
    });
    // 左からフェードイン用
    $(".js-fadeLeft").on("inview", function () {
      $(this).addClass("inview");
    });
    // 右からフェードイン用
    $(".js-fadeRight").on("inview", function () {
      $(this).addClass("inview");
    });
  }
  
  inviewFunc();