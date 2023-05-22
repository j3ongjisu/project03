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
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slcikPrev');
    })
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slcikNext');
    });

})