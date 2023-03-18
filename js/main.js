let elFace = document.querySelector('.face');
let elTongue = document.querySelector('.tongue');
let elHands = document.querySelectorAll('.hand');
let elRightHand = document.querySelectorAll('.hand--right');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let elShowBtn = document.querySelector('.password-button');
username.addEventListener('input', rotatedFace);
username.addEventListener('focus', rotatedFace);
username.addEventListener('blur', () => {
    elFace.style.transform = `rotate(0deg)`;
});

function rotatedFace() {
    let inputLength = username.value.length;
    if (inputLength > 35) {
        return;
    }
    elFace.style.transform = `rotate(${20-inputLength}deg)`;
}
password.addEventListener('focus', () => {
    elHands.forEach(hands => {
        hands.classList.add('hide');
        elTongue.classList.remove('breath')
    });
});
password.addEventListener('blur', () => {
    password.focus();
});
elShowBtn.addEventListener('mousedown', () => {
    password.type = `text`
    elRightHand.forEach(rightHands => {
        rightHands.classList.remove('hide');
        rightHands.classList.add('peek')
        elTongue.classList.add('breath')
    });
});
elShowBtn.addEventListener('mouseup', () => {
    password.type = `password`
    elRightHand.forEach(rightHands => {
        rightHands.classList.add('hide');
        rightHands.classList.remove('peek')
        elTongue.classList.remove('breath')
    });
});