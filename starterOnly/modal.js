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
const quantityInput = document.getElementById("quantity");
const locationRadios = document.querySelectorAll('input[name="location"]');
const conditionsInput = document.getElementById("checkbox1");

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

//quantity of match validation
function validationQuantity () {
  const quantity = quantityInput.value;  
  let quantityRegExp = new RegExp("^[0-9]+$");

  if (!quantityRegExp. test(quantity)) {
    quantityInput.style.borderColor = "red"; 

    let quantityErrorMessage = document.getElementById("quantity-error");

    if (!quantityErrorMessage) {
      quantityErrorMessage = document.createElement("span");
      quantityErrorMessage.id = "quantity-error";
      quantityErrorMessage.style.color = "red";

      quantityInput.parentNode.insertBefore(
        quantityErrorMessage,
      quantityInput.nextSibling
      );
    }

    quantityErrorMessage.textContent = "Vous devez indiquer le nombre de tournois.";

    return false;
  } else {
    quantityInput.style.borderColor = "";

    const quantityErrorMessage = document.getElementById("quantity-error");
    if (quantityErrorMessage) {
      quantityErrorMessage.textContent = "";
    }
    return true;
  }
}

//location validation
function validationLocation() {
  let selectedLocation = false;
  const radioContainer = document.querySelector(".formData.radioContainer");
  let locationErrorMessage = document.getElementById("location-error");

  locationRadios.forEach(radio => {
    if (radio.checked) {
      selectedLocation = true;
    }
  });

  if (!selectedLocation) {
    radioContainer.classList.add("radio-error");
    
    if (!locationErrorMessage) {
      locationErrorMessage = document.createElement("span");
      locationErrorMessage.id = "location-error";
      radioContainer.appendChild(locationErrorMessage);
    }

    locationErrorMessage.textContent = "Veuillez choisir une option.";
    return false;
  } else {
    radioContainer.classList.remove('radio-error');
    if (locationErrorMessage) {
      locationErrorMessage.remove();
    }
    return true;
  }
}

  // verification of every locations for the validation
  locationRadios.forEach(radio => {
    radio.addEventListener("change", validationLocation);
  });

//obligatory conditions validation
  function validationConditions () {
  let conditionsErrorMessage = document.getElementById("conditions-error");
  const conditionsContainer = conditionsInput.parentElement;
  
    if (!conditionsInput.checked) {
      conditionsContainer.classList.add("error");

      if (!conditionsErrorMessage) {
        conditionsErrorMessage = document.createElement("span");
        conditionsErrorMessage.id = "conditions-error";
        conditionsErrorMessage.style.color = "red";
        conditionsErrorMessage.style.display = "block";
        conditionsErrorMessage.style.marginTop = "5px";

        conditionsErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";

        const label = conditionsContainer.querySelector('label');
        label.after(conditionsErrorMessage);
      }  
      return false;
    } else {
    conditionsContainer.classList.remove("error");
    conditionsErrorMessage?.remove();
    }
    return true;
  }

//Event listener for the submit check
firstNameInput.addEventListener("blur", validationFirstName);
lastNameInput.addEventListener("blur", validationLastName);
emailInput.addEventListener("blur", validationEmail);
birthdateInput.addEventListener("blur", validationBirthdate);
quantityInput.addEventListener("blur", validationQuantity);
conditionsInput.addEventListener("change", validationConditions);

//list of const for the validation check
document.querySelector("form").addEventListener("submit", function (event) {
event.preventDefault();

  const validationChecks = [
    validationFirstName(),
    validationLastName(),
    validationEmail(),
    validationBirthdate(),
    validationQuantity(),
    validationLocation(),
    validationConditions()
  ];

//validation for every check confirmed, submition allowed
const valid = validationChecks.every(check => check === true);

   if (valid) {
    const form = this;
    form.innerHTML = "";

    //confirmation message
    const confirmationMessage = document.createElement("div");
    confirmationMessage.className = "confirmation-message";
    confirmationMessage.innerHTML = `<p>Merci ! Votre réservation a été reçue.</p>`;
    form.appendChild(confirmationMessage);
  }
});

