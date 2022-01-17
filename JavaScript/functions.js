import { emailInput } from './registration.js';
import { pictureFirstShadow } from './script.js';
import { getEnter } from './script.js';
import { buttonLogIn } from './script.js';
import { buttonEnter } from './script.js';
import { message } from './script.js';
import { root } from './script.js';
import { root2 } from './registration.js';
import { root3 } from './entrance.js';
import { root4 } from './piano.js';
import { buttonExit } from './piano.js';
import { entranceWrapper } from './registration.js';
import { invalidFormText1 } from './registration.js';
import { invalidFormText2 } from './registration.js';
import { repeatPasswordInput } from './registration.js';
import { passwordInput } from './registration.js';
import { nameInput } from './registration.js';
import { surnameInput } from './registration.js';
import { emailEntranceInput } from './entrance.js';
import { passwordEntranceInput } from './entrance.js';
import { errorEntranceText } from './entrance.js';
import { main } from './index.js';
import { eye1 } from './registration.js'
import { eye2 } from './registration.js'
import { eye3 } from './entrance.js'
import { addPianoListeners } from './piano.js'
import { avatar } from './piano.js'
//-------------------------- Function: visible password  ---------------------------
function changeVisible(event) {
    if (event.target == eye1) {willVisible(eye1, passwordInput)}
    if (event.target == eye2) {willVisible(eye2, repeatPasswordInput)}
    if (event.target == eye3) {willVisible(eye3, passwordEntranceInput)}
}

function willVisible(a, b) {
    if (a.src == 'http://127.0.0.1:5500/png/eye-disible.svg') {
        a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-visible.svg')
    } else {a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-disible.svg')}

    if (b.type == 'password') {
        b.setAttribute('type', 'text')
    } else {b.setAttribute('type', 'password')}
}

//-----------------------  Check form  -----------------------

//Check function
function checkForm() {
    getValid(entranceWrapper)
}

// Valid function
function getValid(form) {
    invalidFormText1.style.display = 'none';
    invalidFormText2.style.display = 'none';
    invalidFormText1.textContent = 'User with same email has already been registered';
    if (getValidName(nameInput) && getValidName(surnameInput)) {
        if (getValidEmail(emailInput)) {
            const arr = JSON.parse(localStorage.getItem('users'));
            let acc = true;

            if (arr != null || arr) {
                endFor:
                for (let i of arr) {
                    if (i.user.email == emailInput.value) {
                        acc = false;
                        invalidFormText1.style.display = 'flex';
                        break endFor
                    } 
                }
            } 

            if (acc) {
                if (getValidPassword(passwordInput, repeatPasswordInput)) {
                    if (localStorage.getItem('users')) {
                        setLocalInfo(form);
                    } else {
                        setFirstLocalInfo(form);
                    }
                } else {invalidFormText2.style.display = 'flex'}
            }
        } else {
            invalidFormText1.style.display = 'flex';
            invalidFormText1.textContent = 'Invalid email';

        }
    }

}

// Create user's function 
async function setLocalInfo(form) {
    let acc = await JSON.parse(localStorage.getItem('users'));
    const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
    const resolve = await response.json();
    let name = form.name.value;
    const nameArr = name.split(' ');
    name = nameArr.join('');
    name = name[0].toUpperCase() + name.slice(1);
    let surname = form.surname.value;
    const surnameArr = surname.split(' ');
    surname = surnameArr.join('');
    surname = surname[0].toUpperCase() + surname.slice(1);
    const obj = {
        id: acc.length + 1,
        user: {
            name: `${name}`,
            surname: `${surname}`,
            email: `${form.email.value}`,
            password: `${form.password.value}`,
            avatar: `${resolve.results[18].image}`
        }
    }

    acc[acc.length] = obj;
    localStorage.setItem('users', JSON.stringify(acc));
    message.style.opacity = '1';
    setTimeout(() => message.style.opacity = '0', 2000)
    setTimeout(() =>  pictureFirstShadow.style.zIndex = '1', 2500)
    root2.remove();
}

// Create first user's function
async function setFirstLocalInfo(form) {
    const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
    const resolve = await response.json();
    let name = form.name.value;
    const nameArr = name.split(' ');
    name = nameArr.join('');
    name = name[0].toUpperCase() + name.slice(1);
    let surname = form.surname.value;
    const surnameArr = surname.split(' ');
    surname = surnameArr.join('');
    surname = surname[0].toUpperCase() + surname.slice(1);
    const obj = {
        id: 1,
        user: {
            name: `${name}`,
            surname: `${surname}`,
            email: `${form.email.value}`,
            password: `${form.password.value}`,
            avatar: `${resolve.results[18].image}`
        }
    }

    let acc = [obj];
    localStorage.setItem('users', JSON.stringify(acc));
    message.style.opacity = '1';
    setTimeout(() => message.style.opacity = '0', 2000)
    setTimeout(() =>  pictureFirstShadow.style.zIndex = '1', 2500)
    root2.remove();
}


// Valid name's function
function getValidName(inp) {
    const reg = /^[-A-Za-zА-Яа-яЁё/ ]{1,15}$/; 
    let acc = false;

    if (inp.value != '') {
        if (reg.test(inp.value)) {
            acc = true;
        }
    } 
    return acc
}

// Valid email's function
function getValidEmail(email) {
    const r = /^([a-z0-9!#$%&'*+/=?^_`{|}~-]{1,})+@([A-Za-z0-9]{1,15})+([.][A-Za-z0-9]{1,10})$/i;
    let acc = false;

    if (email.value != '') {
        if (r.test(email.value)) {
            acc = true;
        } 

    } 
    return acc
}

// Valid password's function
function getValidPassword(pass, repPass) {
    const r = /[0-9A-Za-z]{6,20}/;
    let acc = false;

    if (pass.value != '' && repPass.value != '' && pass.value == repPass.value) {
        if (r.test(pass.value)) {
            acc = true;
        }
    } 
    return acc
}

//------------------------  Entrance  -------------------------------------------------

// Entrance 
function switchToPiano() {
    validEntrance()
}

function validEntrance() {
    if (validEntranceEmail() && validEntrancePass()) {
        root3.remove()
        goToPiano()
    } else {
        errorEntranceText.classList.add('errorActive');
    }
}

function goToPiano() {
    errorEntranceText.classList.remove('errorActive');
    pictureFirstShadow.style.zIndex = '1';
    buttonExit.addEventListener('click', exitHandler);
    buttonLogIn.removeEventListener('click', getEnter);
    buttonEnter.removeEventListener('click', getEnter) ;
    main.removeChild(root);
    main.append(root4);
    addPianoListeners()
    avatar.setAttribute('src', getAvatar());
}

// Entrance email's validation
function validEntranceEmail() {
    let acc = false;
    const arr = JSON.parse(localStorage.getItem('users'))
    arr.filter(el => {
        if (el.user.email == emailEntranceInput.value) {
            acc = true;
            localStorage.setItem('user', JSON.stringify(el))
        }
    })

    if (emailEntranceInput.value != '' && acc == true) {
        return acc
    } else {
        acc = false;

    }

    return acc
}

// Entrance password's validation
function validEntrancePass() {
    let acc = false;
    const arr = JSON.parse(localStorage.getItem('users'))
    arr.filter(el => {
        if (el.user.password === passwordEntranceInput.value && el.user.email ===emailEntranceInput.value) {
            acc = true;
        }
    })

    if (passwordEntranceInput.value != '' && acc == true) {
        return acc
    } else {
        acc = false;
    }

    return acc
}


//------------------------------------------------------   Account  ---------------------------------



function getAvatar() {
    if (JSON.parse(localStorage.getItem('user'))) {
        console.log(JSON.parse(localStorage.getItem('user')))
        const acc = JSON.parse(localStorage.getItem('user'));
        const src = acc.user.avatar;
        return src
    } else {
        return ''
    }
}

//--------------------------------------------------------  Exit  ------------------------------------

function exitHandler() {
    buttonExit.removeEventListener('click', exitHandler);
    buttonLogIn.addEventListener('click', getEnter);
    buttonEnter.addEventListener('click', getEnter);
    main.removeChild(root4);
    main.append(root);
}



export { checkForm, switchToPiano, changeVisible, getAvatar } 
