$('.owl-projects').owlCarousel({
    loop: true,
    rtl: true,
    // dots:false,
    margin: 7,

    autoplay: true,

    autoplayTimeout: 2000,
    autoplaySpeed: 1200,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },


        786: {
            items: 2
        },
        992: {
            items: 3,
        }
    }
});


$('.dropdown-toggle').dropdown()