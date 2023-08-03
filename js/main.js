(function($){
  'use strict'

    //code start
    $('.bers i.fa-bars').on('click', function(){
       $('.bers i.fa-times').show();
       $(this).hide();

    });
    $('.bers i.fa-times').on('click', function(){
       $('.bers i.fa-bars').show();
       $(this).hide();

    });

    $('.bers i.fa-bars').on('click', function(){
      $('.res-nav').animate({
        left : 0
      });
    });

    $('.bers i.fa-times').on('click', function(){
      $('.res-nav').animate({
        left : -305
      },250)
    });

    $('.navigation ul li').on('click', function(){
      $('.navigation ul li').children('.menu-list').hide();
      $('.navigation ul li').children('.contact-list').hide();
    })

    $('.res-nav ul li').on('click', function(){
      $('.res-nav ul li').children('.menu-list').hide();
      $('.res-nav ul li').children('.contact-list').hide();
    })

    $('.menu-li').on('click', function(){
       $('.contact-li').children('.contact-list').hide();
       $('.menu-li').find('.up').toggleClass('rotate');
      $(this).children('ul').slideToggle();
    });


    $('.contact-li').on('click', function(){
      $('.menu-li').children('.menu-list').hide();
       $('.contact-li').find('.up').toggleClass('rotate');
      $(this).children('ul').slideToggle();
      
    });

    if ( $('.navigation ul li').children('.menu-list').hide() ) {

         $('.contact-li').removeClass('.rotate');

    }

 
    $(window).scroll(function (){

      if( $(window).scrollTop() > 4000){
        $('.scroll').show();
      }

      else{
        $('.scroll').hide();
      }

    });

    $('.scroll').on('click', function(){
      $('html').animate({
        scrollTop:0
      },1)
    });

    $('.show button').on('click', function(){
      $('.sec-8').hide();
      $('.sec-9').show();
    });

    $('.hide-owl button').on('click', function(){
      $('.sec-9').hide();
      $('.sec-8').show();
    });


    //wow js

    var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animate__animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
          }
        );
        wow.init();

       //owl js

        $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              nav:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:4
                  }
              }
          })

}) (jQuery);