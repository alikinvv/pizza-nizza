$('body').on('click', '.copyright .top', () => {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
})

let sameHeight = (elem) => {
    let highestBox = 0;

    $(elem).each(function() {
        if ($(this).height() > highestBox) {
            highestBox = $(this).height(); 
        }
    });  

    $(elem).removeClass('height');
    $(elem).height(highestBox);
}


sameHeight('.catalog__top');
sameHeight('.catalog__desc');

$(window).on('resize', () => {
    $('.catalog__top').addClass('height');
    $('.catalog__desc').addClass('height');

    sameHeight('.catalog__top');
    sameHeight('.catalog__desc');
});

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.sidebar').toggleClass('active');
    $('.main').toggleClass('active');

    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header').prepend('<div class="hamburger"><span></span></div>');
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
    }
});

$('body').on('click', '.close-menu', () => {
    $('.hamburger').toggleClass('active');
    $('.menu').removeClass('active');
});

let initMobileMenu = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header').prepend('<div class="hamburger"><span></span></div>');
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
    }
}

initMobileMenu();
$(window).on('resize', initMobileMenu);
