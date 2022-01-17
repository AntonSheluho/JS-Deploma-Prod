import { root2 } from './registration.js';
import { root3 } from './entrance.js';

//    -------------   First title page    -----------------
 
/* 
    Site
*/

const root = document.createElement('div');
root.classList.add('root1')

/*
    Clock
*/ 

const clock = document.createElement('div');
clock.classList.add('clock')

/*
    Background
*/

const pictureFirst = document.createElement('div');
pictureFirst.classList.add('picture');

/*
    regMessage
*/

const message = document.createElement('div');
message.classList.add('message');
message.append('You have been successfully registered')
pictureFirst.append(message);

/*
    Titles
*/

const pictureFirstContent1 = document.createElement('div');
pictureFirstContent1.classList.add('pictureContent', 'pictureFirstContent1');
pictureFirstContent1.append(`Would you like to learn how to play the piano?`);
pictureFirst.append(pictureFirstContent1);

const pictureFirstContent2 = document.createElement('div');
pictureFirstContent2.classList.add('pictureContent', 'pictureFirstContent2');
pictureFirstContent2.append(`You can achieve your dreams with us!`);
pictureFirst.append(pictureFirstContent2);

/*
    Registration and Entrance
*/

const pictureFirstContent3 = document.createElement('div');
pictureFirstContent3.classList.add('pictureContent', 'pictureFirstContent3');

const buttonWrapper = document.createElement('div')
buttonWrapper.classList.add('buttonWrapper')

const buttonEnter = document.createElement('div');
buttonEnter.classList.add('button', 'buttonEnter');
buttonEnter.append('Log on')
buttonEnter.addEventListener('click', getEnter)

const buttonLogIn = document.createElement('div');
buttonLogIn.classList.add('button', 'buttonLogIn');
buttonLogIn.append('Log in')
buttonLogIn.addEventListener('click', getEnter)

buttonWrapper.append(buttonEnter, buttonLogIn)
pictureFirstContent3.append(buttonWrapper)
pictureFirst.append(pictureFirstContent3);


/*
    background shadow
*/

const pictureFirstShadow = document.createElement('div');
pictureFirstShadow.classList.add('pictureShadow');
pictureFirst.append(pictureFirstShadow);

/*
    luggage
*/

root.append(clock, pictureFirst);

/*
    Titles text enter
*/

setTimeout((() => pictureFirstContent1.style.left = `27%`), 500);
setTimeout((() => pictureFirstContent2.style.left = `31%`), 1500);
setTimeout((() => pictureFirstContent3.style.left = `34%`), 2500);


 //      -----------------------    Clock's  function     ---------------------------

// get entrance and log function
function getEnter(event) {
    pictureFirstShadow.style.zIndex = '10';
    if (event.target == buttonEnter) {
        root.append(root3);
    } else if (event.target == buttonLogIn) {
        root.append(root2);
    }
}

// Clock's function
function giveTime() {
    
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    };

    if (min < 10) {
        min = '0' + min;
    };

    if (sec < 10) {
        sec = '0' + sec
    }

    clock.textContent = `${hour} : ${min} : ${sec}`;
    
}
giveTime()
setInterval(giveTime, 1000)

export { 
    pictureFirstShadow, 
    root, 
    getEnter,
    buttonLogIn,
    buttonEnter,
    message 
}