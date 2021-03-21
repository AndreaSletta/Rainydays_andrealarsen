// smooth scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

// email subscription
window.onload = function () {
  console.log = "hello";
  const signUpButton = document.querySelector(".newsletter");
  const signUpEmail = document.querySelector("#email");
  const subValitadionText = document.querySelector("#subscriptionconfirm");

  function validateEmailSignup() {
    if (validateEmail2(email.value)) {
      signUpEmail.placeholder = "";
    } else {
      signUpEmail.placeholder = "Enter valid email";
    }

    if (validateEmail2(signUpEmail.value)) {
      subValitadionText.style.display = "block";
    }
  }
  signUpButton.addEventListener("click", validateEmailSignup);

  function validateEmail2(signUpEmail) {
    const regEx2 = /\S+@\S+\.\S+/;
    const patternMatches2 = regEx2.test(signUpEmail);
    return patternMatches2;
  }
};
