$(document).ready(function(){
    //слайдер
    var owl = $('#watch');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
    });

// Go to the next item
    $('.customNext').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrev').click(function() {
     // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    //tabs
    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs__tab_active)', function() {
        $(this)
            .addClass('catalog-tabs__tab_active').siblings().removeClass('catalog-tabs__tab_active')
            .closest('div.container').find('div.catalog-content').removeClass('catalog-content_active')
            .eq($(this).index()).addClass('catalog-content_active');
    });

    //addClass
    $('p.addClass').on('click', function () {
        $('p.addClass').toggleClass('active')

    });

 // more btn
    $('catalog-content-card__moreBtn').on('click', function (e) {
        e.preventDefault();
        $('catalog-content-card__item').addClass('catalog-content-card__item_active')
        $('catalog-content-card__itemMore').addClass('catalog-content-card__itemMore_active')
    })

// back btn
    $('catalog-content-card-more__backBtn').on('click', function (e) {
        e.preventDefault();
        $('catalog-content-card__item').removeClass('catalog-content-card__item_active')
        $('catalog-content-card__itemMore').removeClass('catalog-content-card__itemMore_active')
    })

    $(window).scroll(function () {
        if($(this).scrollTop() > 500){
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    })

        $('.header-menu-call__btn, .home__btn').on('click', function () {
     $('.overlay, .popup, .consult').fadeIn('slow');
    })
    $('.popup__close').on('click', function () {
        $('.overlay, .popup, .consult, .thanks').fadeOut('slow');
    })

    $('.consultation-form__btn').on('click', function () {
        $('.overlay, .popup, .thanks').fadeIn('slow');
        $('.consult').fadeOut('');

    });

    $('.catalog-content-card__buyBtn').each(function (i) {
        $(this).on('click', function () {
            $('.buy-form .buy-form__subtitle').text($('.catalog-content-card__title').eq(i).text())
            $('.overlay, .popup, .buy-form').fadeIn('slow');

        })
    })

});

