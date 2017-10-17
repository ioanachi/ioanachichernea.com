$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({
    target: '.sidebar'
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  // $(".sidebar ul li a").on("click", function(e) {
  //     htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");
  //   e.preventDefault();
  // });

  /*===============================================
    Toggle Menu
  ===============================================*/
  var menu = $(".nav");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-nav")) {
      menu.removeClass("show-nav");
    }
    else {
      menu.addClass("show-nav");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  $(document).on("click", function() {
    if (menu.hasClass("show-nav")) {
      menu.removeClass("show-nav");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });

  /*===============================================
    Sticky nav
  ===============================================*/
  $(window).on("load resize", function() {

    var navOffset = $(".toggle-btn").offset().top;

    $(window).on("scroll", function() {
      var scrollPos = $(window).scrollTop();

      if (scrollPos >= navOffset) {
        toggleBtn.addClass("fixed");
        menu.addClass("stickyNav");
      } else {
        toggleBtn.removeClass("fixed");
        menu.removeClass("stickyNav");
      }
    });

  });

  // Active Placeholder when screen resolution is less than 768px
  $(window).on("load resize", function() {
    if ($(window).width() < 768) {
      toggleBtn.wrap('<div class="toggle-placeholder"></div>');
      $(".toggle-placeholder").height(toggleBtn.outerHeight());
    }
  });


  /*===============================================
    MixItUp
  ===============================================*/
  $('#mix-container').mixItUp();


  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Owl Carousel
  ===============================================*/

  // Testimonial Slider
  $("#testimonialSlider").owlCarousel({
    loop:true,
    items:1,
    margin:30,
    dotsSpeed:500,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:500 // 0.5 seconds
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });

  /*===============================================
    Google Maps
  ===============================================*/
  var markerIcon = "images/marker.png";
  // Map Initial Location
  var initLatitude = -37.812154; // <- Latitude here
  var initLongitude = 144.954619; // <- Longitude here

  var map = new GMaps({
    el: '#map-canvas',
    lat: initLatitude,
    lng: initLongitude,
    zoom: 16,
    scrollwheel: false
  });
  map.addMarker({
    lat : initLatitude,
    lng : initLongitude,
    icon: markerIcon
  });
  /*===============================================
    end Google Maps
  ===============================================*/

});
