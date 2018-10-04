/* nav button clicks */
$('body').on('click', '#signature', function() {
$('html, body').animate({
      scrollTop: (0)
}, 600);
return false;
});

$('body').on('click', '#contact-button', function() {
$('html, body').animate({
     scrollTop: $("#contact-container").offset().top
}, 600);
return false;
});
