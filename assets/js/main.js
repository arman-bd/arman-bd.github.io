(function($) {
  
  "use strict";  

  $(window).on('load', function() {
    // Hide Preloader
    //setTimeout(function(){
      $('.preloader').fadeOut('slow');
      $('.full-content').css("display", "");
      //$('.full-content').fadeIn("slow");
    //}, 20000);
    

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 50,
     time: 2500
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    // $("html").easeScroll({
    //   frameRate: 160,
    //   animationTime: 900,
    //   stepSize: 150,
    //   pulseAlgorithm: 1,
    //   pulseScale: 4,
    //   pulseNormalize: 1,
    //   accelerationDelta: 40,
    //   accelerationMax: 1,
    //   keyboardSupport: true,
    //   arrowScroll: 60,
    //   touchpadSupport: true,
    //   fixedBackground: true
    // });
    // $("html").easeScroll();

    $(this).impulse();

    // Parallax
    setTimeout(function(){
      
      new Parallax(document.getElementsByClassName('social-parallax')[0]);
      new Parallax(document.getElementsByClassName('social-parallax')[1]);
      new Parallax(document.getElementsByClassName('about-parallax')[0]);
      new Parallax(document.getElementsByClassName('jobs-parallax')[0]);


      
    }, 500)



  });      

}(jQuery));