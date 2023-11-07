$(function () {
    $('.mainSlide').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        dots: true,
    })

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    })

    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    })

    $()

    $('.subVisual03 .content').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
    })

    $('.subVisual03 .arrows .left').on('click', function () {
        $('.subVisual03 .content').slick('slickPrev')
    })

    $('.subVisual03 .arrows .right').on('click', function () {
        $('.subVisual03 .content').slick('slickNext')
    })

    $('.subVisual02 .tabMenu li').on('click', function (e) {
        e.preventDefault()

        const idx = $(this).index()

        $(this).addClass('on').siblings().removeClass('on')

        $('.subVisual02 .tabContent .content').eq(idx).addClass('on')
            .siblings().removeClass('on')
    })

    $('.totop button').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.totop button').addClass('on')
        } else {
            $('.totop button').removeClass('on')
        }
    })
})


