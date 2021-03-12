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

// contact form validation
window.onload = function () {
  const button = document.querySelector(".submit");

  const form = document.querySelector("form");

  const name = document.querySelector(".name");
  const nameError = document.querySelector("#nameError");

  const email = document.querySelector(".subject");
  const emailError = document.querySelector("#subjectError");

  const text = document.querySelector(".textarea");
  const textError = document.querySelector("#textareaError");

  //

  function validateForm() {
    if (checkLength(name.value, 1)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    if (checkLength(email.value, 1)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    if (validateEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    if (checkLength(text.value, 1)) {
      textError.style.display = "none";
    } else {
      textError.style.display = "block";
    }

    // confirm

    if (
      checkLength(name.value, 1) &&
      checkLength(email.value, 1) &&
      validateEmail(email.value) &&
      checkLength(text.value, 1)
    ) {
      form.innerHTML +=
        "<h3>" +
        "We have recieved your message and will respond to you soon!" +
        "</h3>";
    }
  }

  button.addEventListener("click", validateForm);

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
};
