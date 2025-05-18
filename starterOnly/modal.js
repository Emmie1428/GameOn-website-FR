function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.getElementById("close-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
document.addEventListener('DOMContentLoaded', function () {

  closeButton.addEventListener('click', function () {
    modalbg.style.display= 'none';
  })
})

//form's validation conditions
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");

//first name validation
function validationFirstName () {
  const firstName = firstNameInput.value;  
  let nameRegExp = new RegExp (".{2,}");
  if (!nameRegExp. test(firstName)) {
    firstNameInput.style.borderColor = "red"; 

    let nameErrorMessage = document.getElementById("first-name-error");

    if (!nameErrorMessage) {
      nameErrorMessage = document.createElement("span");
      nameErrorMessage.id = "first-name-error";
      nameErrorMessage.style.color = "red";

      firstNameInput.parentNode.insertBefore(
        nameErrorMessage,
      firstNameInput.nextSibling
    );
    }

    nameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    return false;
  } else {
    firstNameInput.style.borderColor = "";

    const nameErrorMessage = document.getElementById("first-name-error");
    if (nameErrorMessage) {
      nameErrorMessage.textContent = "";
    }
    return true;
  }
}

//last name validation
function validationLastName () {
  const lastName = lastNameInput.value;  
  let nameRegExp = new RegExp (".{2,}");
  if (!nameRegExp. test(lastName)) {
    lastNameInput.style.borderColor = "red"; 

    let nameErrorMessage = document.getElementById("last-name-error");

    if (!nameErrorMessage) {
      nameErrorMessage = document.createElement("span");
      nameErrorMessage.id = "last-name-error";
      nameErrorMessage.style.color = "red";

      lastNameInput.parentNode.insertBefore(
        nameErrorMessage,
      lastNameInput.nextSibling
    );
    }

    nameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    return false;
  } else {
    lastNameInput.style.borderColor = "";

    const nameErrorMessage = document.getElementById("last-name-error");
    if (nameErrorMessage) {
      nameErrorMessage.textContent = "";
    }
    return true;
  }
}

//email validation
function validationEmail () {
  const email = emailInput.value;  
  let emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

  if (!emailRegExp. test(email)) {
    emailInput.style.borderColor = "red"; 

    let emailErrorMessage = document.getElementById("email-error");

    if (!emailErrorMessage) {
      emailErrorMessage = document.createElement("span");
      emailErrorMessage.id = "email-error";
      emailErrorMessage.style.color = "red";

      emailInput.parentNode.insertBefore(
        emailErrorMessage,
      emailInput.nextSibling
    );
    }

    emailErrorMessage.textContent = "Vous devez entrer une adresse courriel valide.";

    return false;
  } else {
    emailInput.style.borderColor = "";

    const emailErrorMessage = document.getElementById("email-error");
    if (emailErrorMessage) {
      emailErrorMessage.textContent = "";
    }
    return true;
  }
}

//birthdate validation
function validationBirthdate () {
  const birthdate = birthdateInput.value;  
  let birthdateRegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!birthdateRegExp. test(birthdate)) {
    birthdateInput.style.borderColor = "red"; 

    let birthdateErrorMessage = document.getElementById("birthdate-error");

    if (!birthdateErrorMessage) {
      birthdateErrorMessage = document.createElement("span");
      birthdateErrorMessage.id = "birthdate-error";
      birthdateErrorMessage.style.color = "red";

      birthdateInput.parentNode.insertBefore(
        birthdateErrorMessage,
        birthdateInput.nextSibling
      );
    }

    birthdateErrorMessage.textContent = "Vous devez entrer votre date de naissance.";

    return false;
  } else {
    birthdateInput.style.borderColor = "";

    const birthdateErrorMessage = document.getElementById("birthdate-error");
    if (birthdateErrorMessage) {
      birthdateErrorMessage.textContent = "";
    }
    return true;
  }
}

//Event listener for the submit check
firstNameInput.addEventListener("blur", validationFirstName);
lastNameInput.addEventListener("blur", validationLastName);
emailInput.addEventListener("blur", validationEmail);
birthdateInput.addEventListener("blur", validationBirthdate);

//list of const for the validation check before submit
const validationSubmit = [
  validationFirstName,
  validationLastName,
  validationEmail, 
  validationBirthdate,

]
//validation check before submit
document.querySelector("form").addEventListener("submit", function (event) {
  const validationResult = validationSubmit.map(validateFinal => validateFinal());

  const invalidField = validationResult.includes(false);
  if (invalidField) {
    event.preventDefault();
  }
});

