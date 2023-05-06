/*----section Order-----*/


/*---'accordion' for user---*/
const infoTitle = document.querySelectorAll('.info__title');
const infoDetails = document.querySelectorAll('.info__details');

for (i = 0; i < infoTitle.length; i++) {
    infoTitle[i].addEventListener('click', showDetails);
}

function showDetails() {
    for (i = 0; i < infoDetails.length; i++) {
        if (infoDetails[i] != this.nextElementSibling && infoDetails[i].classList.contains('hide') == false) {
            infoDetails[i].classList.add('hide');
        }
    }
    this.nextElementSibling.classList.toggle('hide');
}

/*-----select Pizza ------*/

const pizzaList = document.querySelector('.pizza__list');
const totalPrice = document.getElementById('totalPrice');
const sumTotal = document.querySelector('.sum_total')
const totalNumber = document.getElementById('totalNumber');
let priceOnePizza = 0;
let ItemTotal = 0;
let priceTotalPizza = 0;

pizzaList.addEventListener('change', getPricePizza);

function getPricePizza() {
    priceOnePizza = +this.value;
    priceTotalPizza = priceOnePizza * newValue;
    if (priceOnePizza == 0) {
        newValue = 0;
        totalNumber.value = 0;
    }
    totalPrice.innerText = priceTotalPizza.toFixed(2);
    getItemTotal();
}

function getItemTotal() {
    ItemTotal = ingrPrice + priceTotalPizza;
    sumTotal.innerText = ItemTotal.toFixed(2);
    billTotal.innerText = (ItemTotal + 21).toFixed(2);

}

/*---counter of Pizza---*/

let newValue = 0;
counter();

function counter() {
    const counterBtn = document.querySelectorAll('.counter__btn');
    counterBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            if (priceOnePizza != 0) {
                if (direction === 'plus') {
                    newValue = currentValue + 1;
                } else {
                    newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
                }
                inp.value = newValue;
                priceTotalPizza = priceOnePizza * newValue;
                totalPrice.innerText = priceTotalPizza.toFixed(2);
                getItemTotal();
            }
        });
    });
}

/*-----select Іngredients and get Ingredients Price------*/
const ingrArrow = document.querySelector('.ingredients__arrow');
const faArrow = document.querySelector(".fa-solid");
const ingrListBox = document.querySelector(".ingredients__listBox");
const ingrCross = document.querySelector(".ingredients__cross");
const ingrBtn = document.querySelector(".ingr__button");
const checkboxes = document.getElementsByName('list__item');
const valueIngr = document.querySelector(".value_ingr");
const ingrReset = document.querySelector(".button_reset");

ingrArrow.addEventListener('click', showIngredients);

function showIngredients() {
    ingrListBox.classList.remove('hide');
}
ingrCross.addEventListener('click', closeIngredients);

function closeIngredients() {
    ingrListBox.classList.add('hide');
}

ingrBtn.addEventListener('click', getIngrPrice);
let ingrPrice = 0;

function getIngrPrice() {
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            ingrPrice += +checkboxes[i].value;
        }
    }
    closeIngredients();
    ingrReset.addEventListener('click', resetIngr);

    function resetIngr() {
        valueIngr.innerText = (0.00).toFixed(2);
        ingrPrice = 0;
        closeIngredients();
        getItemTotal();
    }
    valueIngr.innerText = ingrPrice.toFixed(2);
    getItemTotal();
}

/*-------Get Discount Price and Reset Discount Price---------*/
const btnApply = document.querySelector(".btn_apply");
const btnReset = document.querySelector(".btn_reset");
const valueDiscountIngr = document.querySelector(".value_discountIngredients");
const valueDiscountPizza = document.querySelector(".value_discountPizza");
const btnAdd = document.querySelector(".form__btnAdd");
const billfinish = document.querySelector(".bill__finish");
const sumDelivery = document.querySelector(".sum_delivery");
const sumDiscount = document.querySelector(".sum_discount");
const billTotal = document.querySelector(".sum_billTotal");
let sumBillTot = 0;
let sumDisc = 0;
let priceDiscountPizza = 0;
let priceDiscountIngr = 0;

btnApply.addEventListener('click', getDiscountPrice);

function getDiscountPrice() {
    if (couponeCode.value == couponNumber) {
        priceDiscountPizza = priceTotalPizza * 0.8;
        valueDiscountPizza.classList.remove('hide');
        valueDiscountPizza.innerText = priceDiscountPizza.toFixed(2);
        totalPrice.classList.add('textDecor');
        priceDiscountIngr = ingrPrice * 0.8;
        valueDiscountIngr.classList.remove('hide');
        valueDiscountIngr.innerText = priceDiscountIngr.toFixed(2);
        valueIngr.classList.add('textDecor');
        btnAdd.style.setProperty('margin-top', '24px');
        billfinish.classList.remove('hide');
        sumDelivery.classList.add('textDecor');
        sumDisc = ItemTotal * 0.2;
        sumBillTot = ItemTotal - sumDisc + 2;
        billTotal.innerText = sumBillTot.toFixed(2);
        sumDiscount.innerText = sumDisc.toFixed(2);
        sumDiscount.style.setProperty('color', '#1aaf29')
        sumDiscount.classList.add('mines')
    }
}

btnReset.addEventListener('click', resetDiscountPrice);

function resetDiscountPrice() {
    valueDiscountPizza.innerText = (0.00).toFixed(2);
    totalPrice.innerText = (0.00).toFixed(2);
    priceTotalPizza = 0;
    valueDiscountPizza.classList.add('hide');
    totalPrice.classList.remove('textDecor');
    valueDiscountIngr.innerText = (0.00).toFixed(2);
    valueIngr.innerText = (0.00).toFixed(2);
    ingrPrice = 0;
    sumDisc = 0;
    sumDiscount.innerText = (0.00).toFixed(2);
    sumBillTot = 19 + 2;
    sumTotal.innerText = (0.00).toFixed(2);
    ItemTotal = 0;
    newValue = 0;
    totalNumber.value = 0;
    billTotal.innerText = sumBillTot.toFixed(2);
    billfinish.classList.add('hide');
    sumDelivery.classList.remove('textDecor');
    sumDiscount.classList.remove('mines')
    sumDiscount.style.removeProperty('color', '#1aaf29')
    valueDiscountIngr.classList.add('hide');
    valueIngr.classList.remove('textDecor');
    btnAdd.style.removeProperty('margin-top', '24px');
}

/*-------Make Order and Send---------*/
const btnMakeOrder = document.querySelector('.bill__btnTotal');
const billTotalSend = document.querySelector('.bill__totalSend');
let billTotSend = 0;
btnMakeOrder.addEventListener('click', getBillTotal);

function getBillTotal() {
    billTotSend = billTotal.innerText;
    billTotalSend.value = billTotSend;
}

/*------show thanks window------*/
btnMakeOrder.addEventListener('click', showThanksWindow);

function showThanksWindow() {
    if (billTotSend != 21) {
        Swal.fire({
            title: "Thanks For Your Order",
            text: `Total Price of Your Order: ${billTotSend}$`,
            confirmButtonText: "close",
            confirmButtonColor: "#444444",
            background: "#FF8C42",
            color: "white",
        });
    }
}