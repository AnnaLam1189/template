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
	
	var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML != '' ? selElmnt.options[selElmnt.selectedIndex].innerHTML : selElmnt.dataset.placeholder;
  // x[i].appendChild(a);
  x[i].insertBefore(a, selElmnt);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = $(this).closest('.custom-select').find('.select-selected');
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.html(this.innerHTML);
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
		// this.siblings('.select-items').classList.toggle("select-hide");
		$(this).siblings('.select-items').toggleClass("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
});