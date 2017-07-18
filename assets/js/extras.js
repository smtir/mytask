$( document ).ready( function() {
    new WOW().init();
    // Testimonial
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      margin:10,
      nav:false,
      center:true,
      dots:true,
      mouseDrag:true,
      touchDrag:true,
      responsive:{
          0:{
              items:1
          }
      }
  });

  // For Mobile Navigation
  $('#m_main_navigation_btn').on('click', function() {
    $('.m_main_navigation').addClass('reveal_main_navigation');
  });

  // Open navbarSide when button is clicked
  $('#m_main_navigation_btn').on('click', function() {
    $('.m_main_navigation').addClass('reveal_main_navigation');
    $('.overlay').show();
  });

  // Close navbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('.m_main_navigation').removeClass('reveal_main_navigation');
    $('.overlay').hide();
  });
  
  $('.close_btn').on('click', function(){
    $('.m_main_navigation').removeClass('reveal_main_navigation');
    $('.overlay').hide();
  });
  // End Mobile Navigation

  // Homepage Animation
  var anim;
  var elem = document.getElementById('home_animation')
  var animData = {
      container: elem,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      rendererSettings: {
          progressiveLoad:false,
          preserveAspectRatio: 'xMinYMin slice'
      },
      path: 'assets/js/animation_data.json'
  };
  anim = bodymovin.loadAnimation(animData);

  //Google Maps JS
  //Set Map
  function initmap() {
    var myLatlng = new google.maps.LatLng(40.8805703,-73.8595489);
    var mapOptions = {
      zoom: 11,
      //center: {lat: 40.8805703, lng: -73.8595489},
      center: myLatlng,
      //mapTypeId: 'satellite'
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    }
    var map = new google.maps.Map(document.getElementById('homemap'), mapOptions);
    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }
  google.maps.event.addDomListener(window, 'load', initmap);
  // End Homepage Google Map  

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});