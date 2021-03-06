  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    
     $('.featured-post-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      vertical: true,
      arrows: false,
      verticalSwiping: true,
      autoplay: true,
      cssEase: 'ease',
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });
    

    // venobox initialize
    $('.venobox').venobox();

  })(jQuery);