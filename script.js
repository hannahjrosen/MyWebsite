/*function scrollTo(prop){
    $('html,body').animate({scrollTop: $("#"+prop).offset().top +
 parseInt($("#"+prop).css('padding-top'),10) },'slow');
}*/



    /* Main button clicks */


$('body').on('click', '#nav-title', function() {
   $('html, body').animate({
         scrollTop: $('body').offset().top
   }, 600);
   return false;
 });

$('body').on('click', '#about-button', function() {
   $('html, body').animate({
         scrollTop: $("#about-me-container").offset().top
   }, 600);
   return false;
 });

 $('body').on('click', '#about-button', function() {
    $('html, body').animate({
          scrollTop: $("#about-me-container").offset().top
    }, 600);
    return false;
  });

  $('body').on('click', '#resume-button', function() {
   $('html, body').animate({
       scrollTop: $("#resume-container").offset().top
   }, 600);
   return false;
 });

  $('body').on('click', '#projects-button', function() {
   $('html, body').animate({
       scrollTop: $("#projects-container").offset().top
   }, 600);
   return false;
});
   $('body').on('click', '#contact-button', function() {
    $('html, body').animate({
        scrollTop: $("#contact-container").offset().top
    }, 600);
    return false;
});

$('body').on('hover', '.proj', function() {
 $('html, body').animate({
     scrollTop: $("#contact-container").offset().top
 }, 600);
 return false;
});
