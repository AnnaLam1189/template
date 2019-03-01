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

  };
  

  

  return {
    init: init,
  }
})(window);

$(document).ready(function() {
  POC.init();
});