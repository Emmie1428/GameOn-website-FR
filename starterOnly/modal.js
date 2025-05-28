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

//function for error messages
function errorMessage(input, errorId, errorMessage, validEntry) {
    input.style.borderColor = validEntry ? "" : "red";
    let errorElement = document.getElementById(errorId);

    if (!validEntry) {
        if (!errorElement) {
            errorElement = document.createElement("span");
            errorElement.id = errorId;
            errorElement.style.color = "red";
            errorElement.style.fontSize = "10px";
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = errorMessage;
    } else if (errorElement) {
        errorElement.textContent = "";
    }
}

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
  let nameRegExp = new RegExp ("\w{2,}");
  const validEntry = nameRegExp.test(firstName);
    
    errorMessage(
      firstNameInput,
      "first-name-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
      validEntry
    );

    return validEntry;
}

//last name validation
function validationLastName () {
  const lastName = lastNameInput.value;  
  let nameRegExp = new RegExp ("\w{2,}");
  const validEntry = nameRegExp.test(lastName);
    
    errorMessage(
      lastNameInput,
      "last-name-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
      validEntry
    );

    return validEntry;
}

//email validation
function validationEmail () {
  const email = emailInput.value;  
  let emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
  const validEntry = emailRegExp.test(email);
    
    errorMessage(
      emailInput,
      "email-error",
      "Vous devez entrer une adresse courriel valide.",
      validEntry
    );

    return validEntry;
}

//birthdate validation
function validationBirthdate () {
  const birthdate = birthdateInput.value;  
  let birthdateRegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const validEntry = birthdateRegExp.test(birthdate);
    
    errorMessage(
      birthdateInput,
      "birthdate-error",
      "Vous devez entrer votre date de naissance.",
      validEntry
    );

    return validEntry;
}

//quantity of match validation
function validationQuantity () {
  const quantity = quantityInput.value;  
  let quantityRegExp = new RegExp("^[0-9]+$");
  const validEntry = quantityRegExp.test(quantity);
    
    errorMessage(
      quantityInput,
      "quantity-error",
      "Vous devez indiquer le nombre de tournois.",
      validEntry
    );

    return validEntry;
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

  errorMessage(
    radioContainer,
    "location-error", 
    "Veuillez choisir une option.",
    selectedLocation 
  );

  return selectedLocation;
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
        conditionsErrorMessage.style.fontSize = "10px";

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
    const modalBody = document.querySelector(".modal-body");
    const originalForm = modalBody.innerHTML;

    //confirmation message
    modalBody.innerHTML = `
        <div class="confirmation-message">
            <p>Merci pour <br>votre inscription.</p>
            <button class="close-reset-btn">Fermer</button>
        </div>
    `;

    //button to close the confirmation modal
    const closeResetButton = modalBody.querySelector('.close-reset-btn');
    closeResetButton.addEventListener('click', () => {
        modalBody.innerHTML = originalForm;
        modalbg.style.display = "none";
        
        // Réinitialisation of the form
        const form = document.querySelector("form");
        if (form) {
            form.reset();
      }});   
    };
});
