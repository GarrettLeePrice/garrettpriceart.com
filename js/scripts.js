$(document).ready(function(){
  $('.js-toggle-rust').click( function() {
    $('.slidedown-rust').toggleClass('active');
    $('.slidedown-etch').removeClass('active');

  });
  $('.js-toggle-etch').click( function() {
    $('.slidedown-etch').toggleClass('active');
    $('.slidedown-rust').removeClass('active');
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
});
