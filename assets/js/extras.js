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
    $(document).on('click', '#purchase_modal_submit', function(event) {
        $('#purchase_modal_submit_welcome').modal('show');
    });
});

$(document).ready(function () {
  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('form_multi_step_active').addClass('form_multi_step_default');
          $item.addClass('form_multi_step_active');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url'],input[type='number'],input[type='radio'],select"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      $(".property_type").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
              $(curInputs[i]).closest(".property_type").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.form_multi_step_active').trigger('click');
});