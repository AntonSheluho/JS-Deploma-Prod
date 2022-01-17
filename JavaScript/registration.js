import { checkForm } from "./functions.js";
import { changeVisible } from "./functions.js";
import { pictureFirstShadow } from './script.js';

const root2 = document.createElement('div');
root2.classList.add('root2');

//  Form container
const entranceForm = document.createElement('div');


// Wrapper
const entranceWrapper = document.createElement('form');
entranceWrapper.classList.add('entranceWrapperReg');
entranceWrapper.setAttribute('onsubmit', `return false`);


// Back mark
const backMark = document.createElement('img');
backMark.setAttribute('src', '../png/backSVG.svg');
backMark.classList.add('backMark');
backMark.addEventListener('click', removeBackMarkHandler);

function removeBackMarkHandler() {
    pictureFirstShadow.style.zIndex = '1';
    root2.remove()
}

// Password eye
const eye1 = document.createElement('img');
eye1.setAttribute('src', '../png/eye-disible.svg');
eye1.classList.add('eye1');

// Password eye 2
const eye2 = document.createElement('img');
eye2.setAttribute('src', '../png/eye-disible.svg');
eye2.classList.add('eye2');




// ---------------  Form  -----------
const entranceName = document.createElement('div');
entranceName.classList.add('entranceName');

// Title
const nameTitle = document.createElement('div');
nameTitle.append('Registration:');
nameTitle.classList.add('nameTitle');
entranceName.append(nameTitle);

// Name
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
nameInput.setAttribute('required', 'true');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('pattern', '[-A-Za-zА-Яа-яЁё ]{1,15}');
nameInput.setAttribute('title', 'The name should contain 1-15 letters either Latin or Cyrillic language');
nameInput.classList.add('formFactor');
entranceName.append(nameInput);



// Surname
const surnameInput = document.createElement('input');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('placeholder', 'Surname');
surnameInput.setAttribute('required', 'true');
surnameInput.setAttribute('id', 'surname');
surnameInput.setAttribute('pattern', `[-A-Za-zА-Яа-яЁё ]{1,15}`);
surnameInput.setAttribute('title', 'The surname should contain 1-15 letters either Latin or Cyrillic language');
surnameInput.classList.add('formFactor');
entranceName.append(surnameInput);

// Email
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('required', 'true');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('title', 'Invalid Email');
emailInput.classList.add('formFactor');
entranceName.append(emailInput);

// Invalid Email
const invalidFormText1 = document.createElement('div');
invalidFormText1.classList.add('invalidFormText');
invalidFormText1.classList.add('invalidFormText1');
invalidFormText1.append('User with same email has already been registered');
entranceName.append(invalidFormText1);

// Password
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('autocomplete', 'current-password');
passwordInput.setAttribute('required', 'true');
passwordInput.setAttribute('pattern', '[0-9A-Za-z]{6,20}');
passwordInput.setAttribute('title', 'The password should be min six sings. Min one number, one uppercase and lowercase letter');
passwordInput.classList.add('formFactor');
entranceName.append(passwordInput);

// Repeat password
const repeatPasswordInput = document.createElement('input');
repeatPasswordInput.setAttribute('type', 'password');
repeatPasswordInput.setAttribute('id', 'repeatPassword');
repeatPasswordInput.setAttribute('placeholder', 'Repeat password');
repeatPasswordInput.setAttribute('required', 'true');
repeatPasswordInput.classList.add('formFactor');
entranceName.append(repeatPasswordInput);
repeatPasswordInput.addEventListener('keyup', getGreenBorderAfterValidation);

function getGreenBorderAfterValidation() {
    if (passwordInput.value == repeatPasswordInput.value) {
        repeatPasswordInput.style.border = `1.5px solid green`;
    } else {
        repeatPasswordInput.style.border = `1.5px solid red`;
    }
}

// Invalid Password
const invalidFormText2 = document.createElement('div');
invalidFormText2.classList.add('invalidFormText');
invalidFormText2.classList.add('invalidFormText2');
invalidFormText2.append('Invalid password');
entranceName.append(invalidFormText2);


// Button registration
const buttonRegistration = document.createElement('input');
buttonRegistration.setAttribute('type', 'submit');
buttonRegistration.setAttribute('id', 'button');
buttonRegistration.setAttribute('value', 'Log in');
buttonRegistration.classList.add('butt', 'buttonRegistration');
buttonRegistration.addEventListener('click', checkForm);

// -------  Events  -------------
eye1.addEventListener('click', changeVisible);
eye2.addEventListener('click', changeVisible);

// Luggage
entranceWrapper.append(
    backMark, 
    entranceName, 
    buttonRegistration, 
    eye1, 
    eye2, 
);
entranceForm.append(entranceWrapper);
root2.append(entranceForm);

export { root2, 
    entranceWrapper,
    nameInput, 
    surnameInput,
    emailInput,
    invalidFormText1, 
    invalidFormText2,
    repeatPasswordInput,
    passwordInput,
    eye1,
    eye2
};

