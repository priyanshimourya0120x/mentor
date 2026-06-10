// COUNTER JS OPEN


const counters = document.querySelectorAll(".counter-box h2");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        }else{
            counter.innerText = target + "+";
        }
    };

    updateCount();
});


// COUNTER JS CLOSE

// DISH PAGE OPEN
function updateMenu(selectId, imageId, priceId, qtyId) {
    const select = document.getElementById(selectId);
    const image = document.getElementById(imageId);
    const price = document.getElementById(priceId);
    const qty = parseInt(document.getElementById(qtyId).innerText);

    const selectedOption = select.options[select.selectedIndex];
    const itemPrice = parseInt(selectedOption.value);

    image.src = selectedOption.getAttribute("data-img");
    price.innerText = "₹" + (itemPrice * qty);
}

function increaseQty(selectId, priceId, qtyId) {
    let qty = document.getElementById(qtyId);
    qty.innerText = parseInt(qty.innerText) + 1;

    updatePrice(selectId, priceId, qtyId);
}

function decreaseQty(selectId, priceId, qtyId) {
    let qty = document.getElementById(qtyId);

    if (parseInt(qty.innerText) > 1) {
        qty.innerText = parseInt(qty.innerText) - 1;
    }

    updatePrice(selectId, priceId, qtyId);
}

function updatePrice(selectId, priceId, qtyId) {
    const price = parseInt(document.getElementById(selectId).value);
    const qty = parseInt(document.getElementById(qtyId).innerText);

    document.getElementById(priceId).innerText =
        "₹" + (price * qty);
}