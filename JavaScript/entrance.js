import { pictureFirstShadow } from './script.js';
import { switchToPiano } from './functions.js';
import { changeVisible } from './functions.js';

// ----------------------  Entrance form ---------------------------
const root3 = document.createElement('div');
root3.classList.add('root3');

// Entrance wrapper
const entranceWrapper = document.createElement('div');
entranceWrapper.classList.add('entranceWrapperReg', 'entranceWrapper');

// Form
const entranceForm = document.createElement('form');
entranceForm.setAttribute('onsubmit', 'return false');
entranceForm.classList.add('entranceForm');

// Back mark
const backEntranceMark = document.createElement('img');
backEntranceMark.setAttribute('src', '../png/backSVG.svg');
backEntranceMark.classList.add('backEntranceMark');
backEntranceMark.addEventListener('click', removeFormEntrance);

function removeFormEntrance() {
    pictureFirstShadow.style.zIndex = '1';
    root3.remove();
}

// Email
const emailEntranceInput = document.createElement('input');
emailEntranceInput.setAttribute('type', 'email');
emailEntranceInput.setAttribute('placeholder', 'Email');
emailEntranceInput.setAttribute('required', 'true');
emailEntranceInput.setAttribute('id', 'entranceEmail');
emailEntranceInput.classList.add('formFactor');
entranceForm.append(emailEntranceInput);

// Password
const passwordEntranceInput = document.createElement('input');
passwordEntranceInput.setAttribute('type', 'password');
passwordEntranceInput.setAttribute('id', 'entrancePassword');
passwordEntranceInput.setAttribute('placeholder', 'Password');
passwordEntranceInput.setAttribute('autocomplete', 'current-password');
passwordEntranceInput.setAttribute('required', 'true');
passwordEntranceInput.classList.add('formFactor');
entranceForm.append(passwordEntranceInput);

// Password eye
const eye3 = document.createElement('img');
eye3.setAttribute('src', '../png/eye-disible.svg');
eye3.classList.add('eye3');

eye3.addEventListener('click', changeVisible);

// Error text
const errorEntranceText = document.createElement('div');
errorEntranceText.classList.add('errorEntranceText');
errorEntranceText.append('Invalid email or password');
entranceForm.append(errorEntranceText);

// Entrance's button 
const entranceButtons = document.createElement('div');
entranceButtons.classList.add('entranceButtons');
entranceForm.append(entranceButtons);

const entrance = document.createElement('input');
entrance.setAttribute('type', 'submit');
entrance.setAttribute('value', 'Entrance');
entrance.classList.add('butt');
entrance.addEventListener('click', switchToPiano)

entranceButtons.append(entrance);


// Luggage
entranceWrapper.append(entranceForm, backEntranceMark, eye3);
root3.append(entranceWrapper);

export { 
    root3, 
    emailEntranceInput, 
    passwordEntranceInput, 
    errorEntranceText,
    eye3 
}