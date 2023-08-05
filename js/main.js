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




    $('.navigation ul li a').on('click', function(){

      $('.navigation ul li ul').slideUp();
      $(this).siblings('ul').slideDown();
      $('.blank').hide();
      $(this).parent('li').children('.blank').show();

    });

    $('.blank').on('click', function(){

      $('.navigation ul li ul').slideUp();
      $(this).hide();

    });


    $('.res-nav ul li a').on('click', function(){

      $('.res-nav ul li ul').slideUp();
      $(this).siblings('ul').slideDown();
      $('.blank').hide();
      $(this).parent('li').children('.blank').show();

    });

    $('.blank').on('click', function(){

      $('.res-nav ul li ul').slideUp();
      $(this).hide();

    });
    
    // $('.navigation ul li a').on('click', function(){

 
    //   $(this).siblings('.up').toggleClass('rotate');

  

    // });
 
    // $('.blank').on('click', function(){

    //  $(this).siblings('.up').toggleClass('prev');

    // });
    
    
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


    $(document).ready(function(){
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


    });

    $('.show button').on('click', function(){
      $('.sec-8').hide();
      $('.sec-9').show();
    });

    $('.hide-owl button').on('click', function(){
      $('.sec-9').hide();
      $('.sec-8').show();
    });

}) (jQuery);