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
