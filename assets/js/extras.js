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

  // On Mobile Menu Click GetStart to close overlay
  $('#getstart_menu').on('click', function(){
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

  // Contact Us Page referer
  $('#referrer').on('change',function(){
        if( $(this).val()==="friend" || $(this).val()==="family" || $(this).val()==="coworker" || $(this).val()==="realtor" || $(this).val()==="attorney" || $(this).val()==="insuranceagent" || $(this).val()==="financialplanner"){
        $("#referrer_name").show()
        } else{
        $("#referrer_name").hide()
        }
    });

  // Select2 Element
  $('select').select2();



});

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

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', '#purchase_modal_submit', function(e) {
        e.preventDefault();
        $('#getstart_modal_submit_welcome').modal('show').fadeIn(450);
    });
});

$(document).ready(function () {
  //jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next_form").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("stepsection").index(next_fs)).addClass("active");
  //de-activate current step on progressbar
  $("#progressbar li").eq($("stepsection").index(current_fs)).removeClass("active");
  
  //show the next stepsection
  next_fs.show(); 
  //hide the current stepsection with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        //'transform': 'scale('+scale+')',
        'position': 'relative'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous_form").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //activate previous step on progressbar using the index of previous_fs
  $("#progressbar li").eq($("stepsection").index(previous_fs)).addClass("active");
  //de-activate current step on progressbar
  $("#progressbar li").eq($("stepsection").index(current_fs)).removeClass("active");
  
  //show the previous stepsection
  previous_fs.show(); 
  //hide the current stepsection with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit_form").click(function(){
  return false;
  $( '.submit_form' ).reset();
});
});



