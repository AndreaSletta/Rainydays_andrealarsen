// check out form validation
window.onload = function () {
  const checkOutButton = document.querySelector("#submitorder");

  const checkOutForm = document.querySelector(".checkoutcolumns");

  const orderConfirmation = document.querySelector(".orderconfirm");

  const checkOutName = document.querySelector("#fullname");
  const checkOutNameError = document.querySelector("#fullnameError");

  const checkOutCountry = document.querySelector("#country");
  const checkOuCountryError = document.querySelector("#countryError");

  const checkOutRegion = document.querySelector("#region");
  const checkOutRegionError = document.querySelector("#regionError");

  const checkOutZipcode = document.querySelector("#zipcode");
  const checkOutZipcodeError = document.querySelector("#zipcodeError");

  const checkOutAddress = document.querySelector("#address");
  const checkOutAddressError = document.querySelector("#addressError");

  const checkOutEmail = document.querySelector("#emailcheckout");
  const checkOutEmailError = document.querySelector("#emailcheckoutError");

  const checkOutCardnumber = document.querySelector("#cardnumber");
  const checkOutCardnumberError = document.querySelector("#cardnumberError");

  const checkOutCardmonth = document.querySelector("#cardmonth");
  const checkOutCardmonthError = document.querySelector("#cardmonthError");

  const checkOutCardyear = document.querySelector("#cardyear");
  const checkOutCardyearError = document.querySelector("#cardyearError");

  const checkOutCardcvc = document.querySelector("#cvc");
  const checkOutCardcvcError = document.querySelector("#cvcError");

  const thermsCheckbox = document.querySelector("#thermscheckbox");
  const thermsCheckboxError = document.querySelector("#checkboxError");

  function checkOutvalidateForm() {
    // Shipping info

    if (checkLength(checkOutName.value, 0)) {
      checkOutNameError.style.display = "none";
    } else {
      checkOutNameError.style.display = "block";
    }

    if (checkLength(checkOutCountry.value, 0)) {
      checkOuCountryError.style.display = "none";
    } else {
      checkOuCountryError.style.display = "block";
    }

    if (checkLength(checkOutRegion.value, 0)) {
      checkOutRegionError.style.display = "none";
    } else {
      checkOutRegionError.style.display = "block";
    }

    if (checkLength(checkOutZipcode.value, 0)) {
      checkOutZipcodeError.style.display = "none";
    } else {
      checkOutZipcodeError.style.display = "block";
    }

    if (checkLength(checkOutAddress.value, 0)) {
      checkOutAddressError.style.display = "none";
    } else {
      checkOutAddressError.style.display = "block";
    }

    if (checkLength(checkOutEmail.value, 0)) {
      checkOutEmailError.style.display = "none";
    } else {
      checkOutEmailError.style.display = "block";
    }

    if (checkOutvalidateEmail(checkOutEmail.value)) {
      checkOutEmailError.style.display = "none";
    } else {
      checkOutEmailError.style.display = "block";
    }

    // Card info

    if (checkLength(checkOutCardnumber.value, 15)) {
      checkOutCardnumberError.style.display = "none";
    } else {
      checkOutCardnumberError.style.display = "block";
    }

    if (checkLength(checkOutCardmonth.value, 1)) {
      checkOutCardmonthError.style.display = "none";
    } else {
      checkOutCardmonthError.style.display = "block";
    }

    if (checkLength(checkOutCardyear.value, 1)) {
      checkOutCardyearError.style.display = "none";
    } else {
      checkOutCardyearError.style.display = "block";
    }

    if (checkLength(checkOutCardcvc.value, 2)) {
      checkOutCardcvcError.style.display = "none";
    } else {
      checkOutCardcvcError.style.display = "block";
    }

    if (thermsCheckbox.checked) {
      thermsCheckboxError.style.display = "none";
    } else {
      thermsCheckboxError.style.display = "flex";
    }

    // Display order confirmation
    if (
      checkLength(checkOutName.value, 0) &&
      checkLength(checkOutCountry.value, 0) &&
      checkLength(checkOutRegion.value, 0) &&
      checkLength(checkOutZipcode.value, 0) &&
      checkLength(checkOutAddress.value, 0) &&
      checkLength(checkOutEmail.value, 0) &&
      checkOutvalidateEmail(checkOutEmail.value) &&
      checkLength(checkOutCardnumber.value, 15) &&
      checkLength(checkOutCardmonth.value, 1) &&
      checkLength(checkOutCardyear.value, 1) &&
      checkLength(checkOutCardcvc.value, 2) &&
      thermsCheckbox.checked
    ) {
      orderConfirmation.style.display = "flex";
      checkOutForm.style.display = "none";
    }
  }

  checkOutButton.addEventListener("click", checkOutvalidateForm);

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function checkOutvalidateEmail(checkOutEmail) {
    const checkOutregEx = /\S+@\S+\.\S+/;
    const checkOutpatternMatches = checkOutregEx.test(checkOutEmail);
    return checkOutpatternMatches;
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
