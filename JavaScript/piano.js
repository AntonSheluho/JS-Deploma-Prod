import { getAvatar } from './functions.js';

// Body

const root4 = document.createElement('div');
root4.setAttribute('id', 'root4');
root4.classList.add('root4')
const bodyShadow = document.createElement('div');
bodyShadow.classList.add('bodyShadow');


// Button exit
const buttonExit = document.createElement('div');
buttonExit.classList.add('buttonExit');
buttonExit.append('Exit');

/*
-----------------------  Template with music notes  -----------------------------------
*/

// Note desk
const note = document.createElement('div');
note.classList.add('note');

// Title
const title = document.createElement('div');
title.classList.add('title');
title.append(`Please choose the song in what you are interested in:`);

// ------- Songs ------
const songNames = document.createElement('div');
songNames.classList.add('songNames');
const song1 = document.createElement('div');
const song2 = document.createElement('div');
const song3 = document.createElement('div');
const song1Text = document.createElement('div');
const song2Text = document.createElement('div');
const song3Text = document.createElement('div');
song1.append(`In the end (Linkin park)`);
song2.append(`Ёлочка`);
song3.append(`Песенка Мамонтёнка`);
song1Text.append(`S..HH..F..DDD..DF / 3 times`);
song2Text.append(`G..DD..G..DD..GFDSA....H..KH..G..DD..GFDSA...H..KH..G..DD..GFDSA`);
song3Text.append(`D..GGGG..H..D..GGGGG...A..HHHH.K..J.HGGGG...A..KJKJ.H..J.HG..G.J..SDF..HG`);

songNames.append(song1, song2, song3);

// Navigation buttons 
const butt = document.createElement('div');
butt.classList.add('buttWrapper');

const buttBack = document.createElement('div');
buttBack.classList.add('buttPlay');
buttBack.append(`Back`);

const buttPlay = document.createElement('div');
buttPlay.classList.add('buttPlay');
buttPlay.append(`Play`);

butt.append(buttBack, buttPlay);

// Song's texts for function
const song1TextContent = `S  H H  F  D D D  D F S  H H  F  D D D  D F S  H H  F  D D D  D F`;
const song2TextContent = `G  D D  G  D D  G F D S A    H  K H  G  D D  G F D S A    H  K H  G  D D  G F D S A`;
const song3TextContent = `D  G G G G  H  D  G G G G G  A  H H H H  K J  H G G G G  A  K J K J H J  H G  G J  S D F H G`;

// Object of songs
const songObject = {
    'song1': {
        song: song1,
        text: song1Text,
        content: song1TextContent
    }, 
    'song2': {
        song: song2,
        text: song2Text,
        content: song2TextContent
    }, 
    'song3': {
        song: song3,
        text: song3Text,
        content: song3TextContent
    }
};

Object.values(songObject).filter(el => {
    el.song.classList.add('song');
    el.text.classList.add('text');
});



/* 
-----------------------------  Piano's keys  ----------------------
*/

// Create piano
const piano = document.createElement('div');
piano.classList.add('piano');

// Create white's keys
const keyDo1 = document.createElement('div');
const keyRe1 = document.createElement('div');
const keyMi1 = document.createElement('div');
const keyFa1 = document.createElement('div');
const keySol1 = document.createElement('div');
const keyLya1 = document.createElement('div');
const keySi1 = document.createElement('div');
const keyDo2 = document.createElement('div');
const keyRe2 = document.createElement('div');
const keyMi2 = document.createElement('div');
const keyFa2 = document.createElement('div');
const keySol2 = document.createElement('div');
const keyLya2 = document.createElement('div');
const keySi2 = document.createElement('div');
const keyDo3 = document.createElement('div');

// Create black's keys
const blackKeyC1 = document.createElement('div'); 
const blackKeyD1 = document.createElement('div'); 
const blackKeyF1 = document.createElement('div'); 
const blackKeyG1 = document.createElement('div'); 
const blackKeyA1 = document.createElement('div'); 
const blackKeyC2 = document.createElement('div'); 
const blackKeyD2 = document.createElement('div'); 
const blackKeyF2 = document.createElement('div'); 
const blackKeyG2 = document.createElement('div'); 
const blackKeyA2 = document.createElement('div'); 

// Create audio
const audioDo1 = new Audio('./audio/right_piano/do1.mp3');
const audioBlackKeyC1 = new Audio('./audio/right_piano/do1D.mp3'); 
const audioRe1 = new Audio('./audio/right_piano/re1.mp3');
const audioBlackKeyD1 = new Audio('./audio/right_piano/re1D.mp3'); 
const audioMi1 = new Audio('./audio/right_piano/mi1.mp3');
const audioFa1 = new Audio('./audio/right_piano/fa1.mp3');
const audioBlackKeyF1 = new Audio('./audio/right_piano/fa1D.mp3'); 
const audioSol1 = new Audio('./audio/right_piano/sol1.mp3');
const audioBlackKeyG1 = new Audio('./audio/right_piano/sol1D.mp3'); 
const audioLya1 = new Audio('./audio/right_piano/lya1.mp3');
const audioBlackKeyA1 = new Audio('./audio/right_piano/lya1D.mp3'); 
const audioSi1 = new Audio('./audio/right_piano/si1.mp3');
const audioDo2 = new Audio('./audio/right_piano/do2.mp3');
const audioBlackKeyC2 = new Audio('./audio/right_piano/do2D.mp3'); 
const audioRe2 = new Audio('./audio/right_piano/re2.mp3');
const audioBlackKeyD2 = new Audio('./audio/right_piano/re2D.mp3'); 
const audioMi2 = new Audio('./audio/right_piano/mi2.mp3');
const audioFa2 = new Audio('./audio/right_piano/fa2.mp3');
const audioBlackKeyF2 = new Audio('./audio/right_piano/fa2D.mp3'); 
const audioSol2 = new Audio('./audio/right_piano/sol2.mp3');
const audioBlackKeyG2 = new Audio('./audio/right_piano/sol2D.mp3'); 
const audioLya2 = new Audio('./audio/right_piano/lya2.mp3');
const audioBlackKeyA2 = new Audio('./audio/right_piano/lya2D.mp3'); 
const audioSi2 = new Audio('./audio/right_piano/si2.mp3');
const audioDo3 = new Audio('./audio/right_piano/do3.mp3');

// White and black keys's object
const whiteKeys = {'KeyA': {keyCode: keyDo1, audio: audioDo1, keyName: 'A'},
                'KeyS': {keyCode: keyRe1, audio: audioRe1, keyName: 'S'},
                'KeyD': {keyCode: keyMi1, audio: audioMi1, keyName: 'D'}, 
                'KeyF': {keyCode: keyFa1, audio: audioFa1, keyName: 'F'}, 
                'KeyG': {keyCode: keySol1, audio: audioSol1, keyName: 'G'}, 
                'KeyH': {keyCode: keyLya1, audio: audioLya1, keyName: 'H'}, 
                'KeyJ': {keyCode: keySi1, audio: audioSi1, keyName: 'J'}, 
                'KeyK': {keyCode: keyDo2, audio: audioDo2, keyName: 'K'}, 
                'KeyL': {keyCode: keyRe2, audio: audioRe2, keyName: 'L'}, 
                'Semicolon': {keyCode: keyMi2, audio: audioMi2, keyName: 'Semicolon'}, 
                'Quote': {keyCode: keyFa2, audio: audioFa2, keyName: 'Quote'}, 
                'Backslash': {keyCode: keySol2, audio: audioSol2, keyName: 'Backslash'}, 
                'Numpad4': {keyCode: keyLya2, audio: audioLya2, keyName: 'Numpad4'}, 
                'Numpad5': {keyCode: keySi2, audio: audioSi2, keyName: 'Numpad5'}, 
                'Numpad6': {keyCode: keyDo3, audio: audioDo3, keyName: 'Numpad6'}
};

const blackKeys = {'KeyW': {keyCode: blackKeyC1, audio: audioBlackKeyC1, keyName: 'W'}, 
                'KeyE': {keyCode: blackKeyD1, audio: audioBlackKeyD1, keyName: 'E'}, 
                'KeyT': {keyCode: blackKeyF1, audio: audioBlackKeyF1, keyName: 'T'}, 
                'KeyY': {keyCode: blackKeyG1, audio: audioBlackKeyG1, keyName: 'Y'}, 
                'KeyU': {keyCode: blackKeyA1, audio: audioBlackKeyA1, keyName: 'U'}, 
                'KeyO': {keyCode: blackKeyC2, audio: audioBlackKeyC2, keyName: 'O'}, 
                'KeyP': {keyCode: blackKeyD2, audio: audioBlackKeyD2, keyName: 'P'}, 
                'BracketRight': {keyCode: blackKeyF2, audio: audioBlackKeyF2, keyName: 'BracketRight'}, 
                'Numpad7': {keyCode: blackKeyG2, audio: audioBlackKeyG2, keyName: 'Numpad7'}, 
                'Numpad8': {keyCode: blackKeyA2, audio: audioBlackKeyA2, keyName: 'Numpad8'}
};

// Keys's building
getWhiteAndBlackStyle()


//---------------------------------  Events  ----------------------------------

piano.addEventListener('mousedown', pushKeyDown);
piano.addEventListener('mouseup', pushKeyUp);

note.addEventListener('click', choiceSongForPlay);
note.addEventListener('click', typeButtBack);
note.addEventListener('click', choiceSong);



/*
    -------------------------  ____USER ACCOUNT____  ---------------------
*/

const root5 = document.createElement('div');
root5.setAttribute('id', 'root5');
root5.classList.add('root5');

// Account's wrapper
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

// --------- Account's icon ------------------
const usersIcon = document.createElement('div');
usersIcon.classList.add('usersIcon');

const avatar = document.createElement('img');
avatar.classList.add('avatar');
avatar.setAttribute('src', `${getAvatar()}`);


// -----------  Account's links ---------------
const linksWrap = document.createElement('div'); 
linksWrap.classList.add('linksWrap');

// Open and close mark
const openMark = document.createElement('div');
openMark.classList.add('openMark');
openMark.addEventListener('click', toggleOpenMark)

function toggleOpenMark() {
    imgMark.classList.toggle('imgMarkActive');
    linksWrap.classList.toggle('linksWrapActive');
    sayWelcome();
}

const imgMark = document.createElement('img');
imgMark.classList.add('imgMark');
imgMark.setAttribute('src', '../png/closeSVG.svg');

openMark.append(imgMark);

// Say hello text
const welcome = document.createElement('div');
welcome.classList.add('welcome');
function sayWelcome() {
    
    if (JSON.parse(localStorage.getItem('user'))) {
        const name = JSON.parse(localStorage.getItem('user')).user.name;
        welcome.textContent = '';
        welcome.append(`Welcome ${name}`);
    }
}
sayWelcome()

// ----------------  Change's buttons  -------------------------------

// Change avatar
const link1 = document.createElement('button');
link1.classList.add('links', 'link1');
link1.append('Change Avatar');
link1.addEventListener('click', changeAvatar);


// Change name
const link2 = document.createElement('div');
link2.classList.add('links', 'link2');
link2.append('Change Name');
const patForLink2 = '[A-Za-zА-Яа-яЁё-]{1,}'
link2.addEventListener('click', openLink2)

function openLink2() {
    openMark.style.display = 'none';
    changeNameOrPass('name', patForLink2);
}

// Change pass
const link3 = document.createElement('div');
link3.classList.add('links', 'link3');
link3.append('Change Password');
const patForLink3 = '[0-9A-Za-z]{6,20}';
link3.addEventListener('click', openLink3);

function openLink3() {
    openMark.style.display = 'none';
    changeNameOrPass('password', patForLink3);
}


// --------------------- Luggage --------------------------------
usersIcon.append(avatar);
linksWrap.append(openMark, welcome, link1, link2, link3);
wrapper.append(usersIcon, linksWrap);
root5.append(wrapper);

note.append(title, songNames, song1Text, song2Text, song3Text, butt);
root4.append(bodyShadow, note);

Object.values(whiteKeys).filter(el => piano.append(el.keyCode))
Object.values(blackKeys).filter(el => piano.append(el.keyCode))
root4.append(piano, buttonExit, root5);


/*
    ------------------------------ _____Functions_____ -----------------------------
*/



// Function for keys's building 
function getWhiteAndBlackStyle() {
    const arr = [4, 10.8, 24.1, 30.8, 37.5, 50.9, 57.6, 71, 77.7, 84.4];
    const whiteText = [`A (До)`, `S (Ре)`, `D (Ми)`, `F (Фа)`, `G (Соль)`, `H (Ля)`, `J (Си)`, `K (До)`, `L (Ре)`, `: (Ми)`, `" (Фа)`, `| (Соль)`, `4 (Ля)`, `5 (Си)`, `6 (До)`];
    const blackText = [`W (До#)`, `E (Ре#)`, `T (Фа#)`, `Y (Соль#)`, `U (Ля#)`, `O (До#)`, `P (Ре#)`, `} (Фа#)`, `7 (Соль#)`, `8 (Ля#)`];
    let accKey = 0;
    let acc = 0;

    for (let el in whiteKeys) {
        whiteKeys[el].keyCode.classList.add('key');
        whiteKeys[el].keyCode.style.left = `${accKey}px`;
        whiteKeys[el].keyCode.append(whiteText[acc]);
        accKey += 90;
        acc++
    }

    acc = 0;

    for (let el in blackKeys) {
        blackKeys[el].keyCode.classList.add('blackKey');
        blackKeys[el].keyCode.style.left = `${arr[acc]}%`;
        blackKeys[el].keyCode.append(blackText[acc]);
        acc++;
    }
}

//---------------------------- Piano's functions -----------------------------------
function pushKeyDown(event) {
    forWhite:
    for (let i in whiteKeys) {
        if (whiteKeys[i].keyCode == event.target || i == event.code) {
            whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
            whiteKeys[i].keyCode.style.border = `3px solid black`;
            whiteKeys[i].keyCode.style.height = `91%`; 
            whiteKeys[i].keyCode.style.width = `86px`; 
            whiteKeys[i].audio.play(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (blackKeys[i].keyCode == event.target || i == event.code) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0rem black`;
            blackKeys[i].keyCode.style.height = `53.5%`; 
            blackKeys[i].audio.play(); 
            break forBlack
        }
    }
}

function pushKeyUp(event) {
    forWhite:
    for (let i in whiteKeys) {
        if (whiteKeys[i].keyCode == event.target || i == event.code) {
            whiteKeys[i].keyCode.style.backgroundColor = `white`;
            whiteKeys[i].keyCode.style.border = `1px solid black`;
            whiteKeys[i].keyCode.style.height = `90%`; 
            whiteKeys[i].keyCode.style.width = `90px`; 
            whiteKeys[i].audio.load(); 
            break forWhite
        }
    }
    forBlack:
    for (let i in blackKeys) {
        if (blackKeys[i].keyCode == event.target || i == event.code) {
            blackKeys[i].keyCode.style.borderBottom = `solid 0.8rem black`;
            blackKeys[i].keyCode.style.borderLeft = `solid 0.3rem black`;
            blackKeys[i].keyCode.style.height = `50%`; 
            blackKeys[i].audio.load(); 
            break forBlack
        }
    }
}


//------------------------------  Function for navigation of songs  ----------------------
function typeButtBack(event) {
    if (event.target == buttBack) {
        title.textContent = `Please choose the song in what you are interested in:`; 
        songNames.style.display = 'block';
        Object.values(songObject).filter(el => el.text.style.display = 'none')
        butt.style.display = 'none';
        clearApi()
    }
}

function choiceSong(event) {
    Object.values(songObject).filter(obj => {
        if (event.target == obj.song) {
            title.textContent = `You can use either the keyboard or mouse`; 
            songNames.style.display = 'none'; 
            obj.text.style.display = 'flex';
            butt.style.display = 'flex'
        }
    })
}

function clearApi() {
    for (let i of idArray) {
        clearTimeout(i)
    }
    for (let obj in whiteKeys) {
        whiteKeys[obj].keyCode.style.backgroundColor = `white`;
        whiteKeys[obj].keyCode.style.border = `1px solid black`;
        whiteKeys[obj].keyCode.style.height = `90%`; 
        whiteKeys[obj].keyCode.style.width = `90px`; 
        whiteKeys[obj].audio.load(); 
    }
    for (let obj in blackKeys) {
        blackKeys[obj].keyCode.style.borderBottom = `solid 0.8rem black`;
        blackKeys[obj].keyCode.style.borderLeft = `solid 0.3rem black`;
        blackKeys[obj].keyCode.style.height = `50%`; 
        blackKeys[obj].audio.load(); 
    }
    idArray = [];
}

//--------------------------------------  Function for autoplay's songs  -----------------
function choiceSongForPlay(event) {
    if (event.target == buttPlay) {
        if (song1Text.style.display == 'flex') {
            playSong(song1TextContent)
        }
        if (song2Text.style.display == 'flex') {
            playSong(song2TextContent)
        }
        if (song3Text.style.display == 'flex') {
            playSong(song3TextContent)
        }
    }
}
let idArray = [];

function playSong(song) {
    clearApi()
    const acc = song.split(' ');
    let time1 = 0;

    acc.forEach(item => {
        
        for (let i in whiteKeys) {
            if (item == whiteKeys[i].keyName) {
                let id = window.setTimeout(() => {
                    whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
                    whiteKeys[i].keyCode.style.border = `3px solid black`;
                    whiteKeys[i].keyCode.style.height = `91%`; 
                    whiteKeys[i].keyCode.style.width = `6.36%`; 
                    whiteKeys[i].audio.play();
    
                    let id2 = setTimeout(() => {
                        whiteKeys[i].keyCode.style.backgroundColor = `white`;
                        whiteKeys[i].keyCode.style.border = `1px solid black`;
                        whiteKeys[i].keyCode.style.height = `90%`; 
                        whiteKeys[i].keyCode.style.width = `6.66%`; 
                        whiteKeys[i].audio.load();
                    }, 500)
                    idArray.push(id2);
                }, `${time1}`);
                idArray.push(id)
                time1 += 600; 
            }
        }
    })
}


// ------------------ Change name's or password's function --------------------------

function changeNameOrPass(type, pattern) {
    removePianoListeners()
    const stor1 = JSON.parse(localStorage.getItem('users'));
    const stor2 = JSON.parse(localStorage.getItem('user'));

    // Wrapper
    const wrap = document.createElement('form');
    wrap.classList.add('linksWrap', 'wrapName');
    wrap.setAttribute('onsubmit', 'return false');

    // Close button
    const nameImgClose = document.createElement('img');
    nameImgClose.setAttribute('src', '../png/x_cross_delete_remove_icon_144023.svg')
    nameImgClose.classList.add('nameImgClose');
    nameImgClose.addEventListener('click', nameImgCloseHandler);
    function nameImgCloseHandler() {
        wrap.classList.toggle('wrapNameActive');
        setTimeout(() => wrap.remove(), 300);
        openMark.style.display = 'block';
        addPianoListeners();
        nameImgClose.removeEventListener('click', nameImgCloseHandler);
        eye4.removeEventListener('click', changeVisible);
        eye5.removeEventListener('click', changeVisible);
    }

    // First line
    const case1 = document.createElement('input');

    if (type === 'password') {
        case1.setAttribute('type', 'password');
        case1.setAttribute('title', 'The password should be min six sings. Min one number, one uppercase and lowercase letter');
    } else {
        case1.setAttribute('type', 'text');
        case1.setAttribute('title', 'The name should contain 1-15 letters either Latin or Cyrillic language');
    }

    case1.setAttribute('placeholder', `Type your ${type}`)
    case1.setAttribute('required', 'true');
    case1.setAttribute('pattern', `${pattern}`);
    case1.classList.add('links', 'nameCases');

    const textErr1 = document.createElement('div');
    textErr1.classList.add('textErr');
    textErr1.append(`Invalid ${type}`)

    // Second line
    const case2 = document.createElement('input');

    if (type === 'password') {
        case2.setAttribute('type', 'password');
        case2.setAttribute('title', 'The password should be min six sings. Min one number, one uppercase and lowercase letter');
    } else {
        case2.setAttribute('type', 'text');
        case2.setAttribute('title', 'The name should contain 1-15 letters either Latin or Cyrillic language');
    }

    case2.setAttribute('placeholder', `Type next ${type}`)
    case2.setAttribute('required', 'true');
    case2.setAttribute('pattern', `${pattern}`);
    case2.classList.add('links', 'nameCases');

    const textErr2 = document.createElement('div');
    textErr2.classList.add('textErr');
    textErr2.append(`Invalid ${type}`)

    // Eyes
    const eye4 = document.createElement('img');
    eye4.setAttribute('src', '../png/eye-disible.svg');
    eye4.classList.add('eye4')
    const eye5 = document.createElement('img');
    eye5.setAttribute('src', '../png/eye-disible.svg');
    eye5.classList.add('eye5')
    eye4.addEventListener('click', changeVisible);
    eye5.addEventListener('click', changeVisible);

    if (type === 'password') {
        eye4.style.display = 'block';
        eye5.style.display = 'block';
    } else {
        eye4.style.display = 'none';
        eye5.style.display = 'none';
    }

    // Button save 
    const caseButt = document.createElement('input');
    caseButt.setAttribute('type', 'submit');
    caseButt.setAttribute('value', 'Change');
    caseButt.classList.add('links', 'caseButt');
    caseButt.addEventListener('click', doCaseButt);
    function doCaseButt() {
        textErr1.style.opacity = `0`;
        textErr2.style.opacity = `0`;
            if (case1.value != '' || pattern.test(case1.value)) {
                if (case1.value == stor2.user.name || case1.value == stor2.user.password) {
                    let pat;
                    if (type == 'name') {
                        pat = /^[A-Za-zА-Яа-яЁё-]{1,}$/;
                    } else {pat = /^[0-9A-Za-z]{6,20}$/}
                    if (case2.value != '' && pat.test(case2.value)) {
                        if (type == 'name') {
                            for (let el of stor1) {
                                if (el.user.name == stor2.user.name) {
                                    el.user.name = case2.value;
                                }
                            }
                            stor2.user.name = case2.value;
                        } else {
                            for (let el of stor1) {
                                if (el.user.password == stor2.user.password) {
                                    el.user.password = case2.value;
                                }
                            }
                            stor2.user.password = case2.value;
                        }
                        localStorage.setItem('users', JSON.stringify(stor1));
                        localStorage.setItem('user', JSON.stringify(stor2));
                        if (type == 'name') {
                            welcome.textContent = '';
                            sayWelcome()
                        }
                        wrap.classList.toggle('wrapNameActive');
                        setTimeout(() => wrap.remove(), 300);
                        openMark.style.display = 'block';
                        addPianoListeners()
                        caseButt.removeEventListener('click', doCaseButt);
                        eye4.removeEventListener('click', changeVisible);
                        eye5.removeEventListener('click', changeVisible);
                    } else {textErr2.style.opacity = `1`}
                } else {textErr1.style.opacity = `1`}
            } else {textErr1.style.opacity = `1`}
    }

    wrap.append(nameImgClose, case1, textErr1, case2, textErr2, caseButt, eye4, eye5);
    linksWrap.append(wrap);
    setTimeout(() => wrap.classList.toggle('wrapNameActive'), 100)

    function changeVisible(event) {
        if (event.target == eye4) {willVisible(eye4, case1)}
        if (event.target == eye5) {willVisible(eye5, case2)}
    }
    
    function willVisible(a, b) {
        if (a.src == 'http://127.0.0.1:5500/png/eye-disible.svg') {
            a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-visible.svg')
        } else {a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-disible.svg')}
    
        if (b.type == 'password') {
            b.setAttribute('type', 'text')
        } else {b.setAttribute('type', 'password')}
    }
}

// Functions which add or remove event key(up or down) 
function addPianoListeners() {
    addEventListener('keydown', pushKeyDown);
    addEventListener('keyup', pushKeyUp);
}
function removePianoListeners() {
    removeEventListener('keydown', pushKeyDown);
    removeEventListener('keyup', pushKeyUp);
}

// ------------------- Change avatar function  -----------------------
function changeAvatar() {
    const iconsWrapper = document.createElement('div');
    wrapper.append(iconsWrapper);
    iconsWrapper.classList.add('iconsWrapper');
    const icons = document.createElement('div');
    icons.classList.add('icons');
    iconsWrapper.append(icons);
    link1.setAttribute('disabled', 'disabled');
    link1.classList.toggle('link1Act');
    setUser()
    iconsWrapper.style.left = `-1084px`;
    iconsWrapper.addEventListener('click', removeAvatarsWrapper, {once: true});
    // Remove wrapper function 
    function removeAvatarsWrapper(event) {
        for (let i of icons.childNodes) {

            if (event.target === i && event.target !== document.querySelector('.backAvatar')) {
                avatar.setAttribute('src', `${i.src}`);
                iconsWrapper.style.left = `190px`;
                const acc1 = JSON.parse(localStorage.getItem('users'));
                const acc2 = JSON.parse(localStorage.getItem('user'));

                for (let j of acc1) {

                    if (j.user.email == acc2.user.email) {
                        acc2.user.avatar = i.src;
                        j.user.avatar = i.src;
                    }
                }
                localStorage.setItem('users', JSON.stringify(acc1));
                localStorage.setItem('user', JSON.stringify(acc2));
                link1.removeAttribute('disabled');
                link1.classList.toggle('link1Act');
                setTimeout(() => iconsWrapper.remove(), 500);
            }
        }
    }
    // Change avatar function 
    async function setUser() {
        const response = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'});
        const resolve = await response.json();
        const back = document.createElement('img');
        back.classList.add('backAvatar');
        back.setAttribute('src', '../png/closeSVG.svg');
        icons.append(back);
        back.addEventListener('click', removeWithoutChange, {once: true})

        for (let i of resolve.results) {
                const img = document.createElement('img');
                img.setAttribute('src', `${i.image}`);
                img.classList.add('avatar', 'icon');
                icons.append(img);
        }
    }  

    function removeWithoutChange() {
        iconsWrapper.style.left = `190px`;
        link1.removeAttribute('disabled');
        link1.classList.toggle('link1Act');
        setTimeout(() => iconsWrapper.remove(), 500);
    }
}


/*
    -----------  ____EXPORT____  ------------
*/


export {  
    root4,
    buttonExit,
    avatar,
    addPianoListeners,
    removePianoListeners,
}