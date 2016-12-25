$(document).ready(function() {

	$('#feedback-form').submit(function() {
		var name = $('#name').val();
		if(name === "") {
			$('#nm').text("Please enter your name.");       
		}

		var email = $('#email').val();
		if(email === "") {
			$('#em').text("Please enter your email.");
		}

		var country = $('#country').val();
		if(country === "") {
			$('#cn').text("Letting me know what geographic region are you from makes it easier for me to contact you.");
		}

		var subject = $('#subject').val();
		if(subject === "") {
			$('#sb').text("What's on your mind?");
		}

		var message = $('#message').val();
		if(message === "") {
			$('#ms').text("hat do you want me to know?");
			return false;
		}
		return true;
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
});
