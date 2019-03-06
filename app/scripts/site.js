var POC = POC || {};

POC = (function(w){
  // global vars
  var header = $('#header'),
      $window = $(window);


  var init = function(){
    $("#signupForm").validate({
			rules: {
				'signup-term': "required"
			},
			// messages: {
			// 	firstname: "Please enter your firstname",
			// 	lastname: "Please enter your lastname",
			// 	username: {
			// 		required: "Please enter a username",
			// 		minlength: "Your username must consist of at least 2 characters"
			// 	},
			// 	password: {
			// 		required: "Please provide a password",
			// 		minlength: "Your password must be at least 5 characters long"
			// 	},
			// 	confirm_password: {
			// 		required: "Please provide a password",
			// 		minlength: "Your password must be at least 5 characters long",
			// 		equalTo: "Please enter the same password as above"
			// 	},
			// 	email: "Please enter a valid email address",
			// 	agree: "Please accept our policy",
			// 	topic: "Please select at least 2 topics"
			// }
    });
    
    $("#commentForm").validate({

    })
		$('.fadeOut').owlCarousel({
			items: 1,
			animateOut: 'fadeOutLeft',
			// animateIn: 'fadeInLeft',
			loop: true,
			margin: 10,
			nav: true,
			// animateOut: 'slideOutDown',
			// animateIn: 'flipInX',
			// items:1,
			// margin:30,
			// stagePadding:30,
			// smartSpeed:450
		});
		// var owl = $('.owl-carousel');
		// 	owl.owlCarousel({
		// 		margin: 10,
		// 		nav: true,
		// 		loop: true,
		// 		responsive: {
		// 			0: {
		// 				items: 1
		// 			},
		// 			600: {
		// 				items: 3
		// 			},
		// 			1000: {
		// 				items: 5
		// 			}
		// 		}
		// 	})
  };
  

  

  return {
    init: init,
  }
})(window);

$(document).ready(function() {
  POC.init();
});