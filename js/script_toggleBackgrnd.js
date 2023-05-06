/*------Toggle Background-----*/

const moonSunMoon = document.querySelectorAll('.moonSun__moon');
const moonSunSun = document.querySelectorAll('.moonSun__sun');
const header = document.querySelector('.header');
const textSubtitle = document.querySelector('.text__subtitle');
const inputLocation = document.querySelector('.text__inputLocation');
const iconМenu = document.querySelector('.icon-menu');
const menuContainer = document.querySelector('.menu__container');
const pzListContent = document.querySelector('.pzList__content');
const imgBoxTitle = document.querySelector('.imgBox__title');
const reservationForm = document.querySelector('.reservation__form');
const formTitle = document.querySelector('.form__title');
const formInput = document.querySelectorAll('.form__input');
const orderContainer = document.querySelector('.order__container');
const userInfo = document.querySelectorAll('.user__info');
const detailsBox = document.querySelector('.details__box');
const mines = document.querySelector('#mines');
const plus = document.querySelector('#plus');
const prValue = document.querySelectorAll('.price__value');
const billSum = document.querySelectorAll('.bill__sum');
const btnResetSend = document.querySelector('.button_resetSend');

moonSunMoon.forEach(function(el) {
    el.addEventListener('click', toggleBack);

});
moonSunSun.forEach(function(el) {
    el.addEventListener('click', toggleBack);
});

function toggleBack() {
    document.body.classList.toggle('backWhite');
    moonSunMoon.forEach(function(el) {
        el.classList.toggle('hide');
    });
    moonSunSun.forEach(function(el) {
        el.classList.toggle('hide');
    });
    formInput.forEach(function(el) {
        el.classList.toggle('elBackGray2');
        el.classList.toggle('elBorderBlack');
    });
    userInfo.forEach(function(el) {
        el.classList.toggle('elBackGray1');
    });
    prValue.forEach(function(el) {
        el.classList.toggle('psElFontBlack');
    });
    billSum.forEach(function(el) {
        el.classList.toggle('psElFontBlack');
    });
    header.classList.toggle('psElBackGray');
    inputLocation.classList.toggle('backWhite');
    inputLocation.classList.toggle('elFontBlack');
    couponeCode.classList.toggle('elFontBlack');
    iconМenu.classList.toggle('backWhite');
    textSubtitle.classList.toggle('elFontBrown');
    menuContainer.classList.toggle('elFontBrown');
    pzListContent.classList.toggle('elFontBrown');
    imgBoxTitle.classList.toggle('elFontBrown');
    reservationForm.classList.toggle('elFontBlack');
    reservationForm.classList.toggle('elBackGray2');
    formTitle.classList.toggle('elFontOrange');
    orderContainer.classList.toggle('elFontBlack');
    detailsBox.classList.toggle('elBackGray1');
    pizzaList.classList.toggle('elBackGray1');
    pizzaList.classList.toggle('elFontBlack');
    totalNumber.classList.toggle('elBackGray1');
    totalNumber.classList.toggle('elFontBlack');
    couponeCode.classList.toggle('elBackGray1');
}

reservationForm.addEventListener('click', showBackground);
btnResetSend.addEventListener('click', resetSend);

function showBackground(e) {
    if (e.target.tagName === 'INPUT') {
        e.target.style.setProperty('background', 'rgba(255, 140, 66, 1)')
    };
}

function resetSend() {
    orderName.style.removeProperty('background', 'rgba(255, 140, 66, 1)');
    oderMail.style.removeProperty('background', 'rgba(255, 140, 66, 1)');
    peopleNumber.style.removeProperty('background', 'rgba(255, 140, 66, 1)');
    orderDate.style.removeProperty('background', 'rgba(255, 140, 66, 1)');
    btnResetSend.style.removeProperty('background', 'rgba(255, 140, 66, 1)');
}