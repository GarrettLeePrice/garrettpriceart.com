$(document).ready(function(){
  $('.js-toggle-rust').click( function() {
    $('.slidedown-rust').toggleClass('active');
    $('.slidedown-etch').removeClass('active');
    $('.slidedown-paper').removeClass('active');
    $('.slidedown-photo').removeClass('active');

  });
  $('.js-toggle-etch').click( function() {
    $('.slidedown-etch').toggleClass('active');
    $('.slidedown-rust').removeClass('active');
    $('.slidedown-paper').removeClass('active');
    $('.slidedown-photo').removeClass('active');
  });
  $('.js-toggle-paper').click( function() {
    $('.slidedown-paper').toggleClass('active');
    $('.slidedown-rust').removeClass('active');
    $('.slidedown-etch').removeClass('active');
    $('.slidedown-photo').removeClass('active');
  });
  $('.js-toggle-photo').click( function() {
    $('.slidedown-photo').toggleClass('active');
    $('.slidedown-rust').removeClass('active');
    $('.slidedown-etch').removeClass('active');
    $('.slidedown-paper').removeClass('active');
  });
  $('.js-toggle-close').click( function() {
    $('.slidedown-photo').removeClass('active');
    $('.slidedown-rust').removeClass('active');
    $('.slidedown-etch').removeClass('active');
    $('.slidedown-paper').removeClass('active');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
});


// REFILL MODAL

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
