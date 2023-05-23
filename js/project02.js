//section1 메인 슬라이드
$(function () {
    $('.main_slide').slick({
        //arrows: false,
        fade: true,
        //vertical: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
})

//section2 제품 슬라이드
$(function () {

    const model = ['ioniq', 'casper', 'sonata']

    $('.product_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');


    });


    $('.product_slide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });

    //모델명 클릭하면 다음 페이지로 넘어가는 버튼
    $('.product_visual .model').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

});


// 위로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
})