/*------show coupon window and add code in order------*/

const menuLinkCoupon = document.querySelector('.menu__link_coupon');
const couponeCode = document.querySelector('.coupon__code');
let couponNumber = '';

for (i = 0; i <= 8; i++) {
    couponNumber += Math.round(Math.random() * 10);
}

menuLinkCoupon.addEventListener('click', showDiscountWindow);

function showDiscountWindow() {
    Swal.fire({
        title: `Your Coupon Code: ${couponNumber}`,
        text: "Your Discount: -20%",
        confirmButtonText: "Save Code In Your Order",
        confirmButtonColor: "#444444",
        background: "#FF8C42",
        color: "white",
    }).then((result) => {
        couponeCode.value = couponNumber;
    });
}