// $(document).ready(function ($) {
// 	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
// 		event.preventDefault();
// 		$(this).ekkoLightbox();
// 	});

// 	$('a[href*="#"]:not([href="#"])').click(function() {
// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html, body').animate({
// 					scrollTop: target.offset().top
// 				}, 1000);
// 				return false;
// 			}
// 		}
// 	});
// });



function started() {
	mixpanel.track("clicked");
}

// var constants={token:"d6b51b0c05a3a4514420ae39c7331f26",domain:"https://instance10.devless.io"};Devless=new Devless(constants);
// function rollAnInstance(){$("#msg-space").text("Redirecting to Heroku ...");email=$("#signup-email").val();password=$("#signup-password").val();0!=email.length&&/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)?$.get("https://instance10.devless.io/service/open_deployment/view/deploy?email="+email,function(a){console.log(a=JSON.parse(a));1110==a.status_code&&($("#msg-space").text("Redirecting to Heroku ..."),
// started(),window.location.href="https://heroku.com/deploy?template=https://github.com/DevlessTeam/DV-PHP-CORE/tree/heroku2")}):($("#msg-space").text("Really, how do you expect me to create an instance with such an email. Come on."),$("#get-started-btn").text("GET STARTED NOW"))};




jQuery(document).ready(function($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});