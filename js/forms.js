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
    if (checkLength(name.value, 0)) {
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
      checkLength(name.value, 0) &&
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
