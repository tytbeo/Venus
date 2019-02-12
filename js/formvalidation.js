// CONTACT US - Script to check invalid/valid form input

// Function blankFormValidation to check blank input
function blankFormValidation(id) {
  let input = document.getElementById(id).value;
  if (input == "" || input.length == 0 || input == null) {
    document.getElementById(id).className = "form-invalid"
  }
  else {
    document.getElementById(id).className = ""
  }
}
// End function blankFormValidation

// Function emailValidation to check valid email input
function emailValidation() {
  let emailinput = document.getElementById("email").value;
  var emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailRegEx.test(emailinput) === false) {
    document.getElementById("email").className = "form-invalid"
  }
  else {
    document.getElementById("email").className = ""
  }
}
// End function emailValidation


// Function emailSubValidation to check valid subscriber email
function emailSubValidation() {
  let emailinput = document.getElementById("emailSub").value;
  var emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailRegEx.test(emailinput) === false) {
    document.getElementById("invalidEmailSub").style.display = "inline";
  }
  else {
    document.getElementById("invalidEmailSub").style.display = "none";
    document.getElementById("subs").style.display = "none";
    document.getElementById("successfulSub").style.display = "inline";
  }
}
// End function emailSubValidation
