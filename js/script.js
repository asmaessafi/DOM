////////// product 1:
var quantity = 0;
function increaseQuantity() {
    quantity++;
    document.querySelector('.quantity').innerText = quantity;
    updateTotalPrice();
}
document.getElementById('increase').addEventListener('click', increaseQuantity);

function decreaseQuantity(){
    if (quantity > 0) {
        quantity--;
        document.querySelector('.quantity').innerText = quantity;
        updateTotalPrice();
    }
}
document.getElementById('decrease').addEventListener('click',decreaseQuantity)
   // delate
document.getElementById('trash').addEventListener('click',removeCard);
function removeCard() {
    const card = document.querySelector('.card');
    card.style.display = 'none';
    document.getElementById('hiddenImage').style.display = 'block';
    document.querySelector('.quantity').innerText = 0;
    updateTotalPrice();

}
// like
document.getElementById('like').addEventListener('click',ColorChange)
function ColorChange(){
    document.getElementById('like').style.color = 'pink';
}
////////// product 2:
var quantity2 = 0;
function increaseQuantity2() {
    quantity2++;
    document.querySelector('.quantity2').innerText = quantity2;
    updateTotalPrice();
}
document.getElementById('increase2').addEventListener('click', increaseQuantity2);

    function decreaseQuantity2() {
        if (quantity2 > 0) {
            quantity2--;
            document.querySelector('.quantity2').innerText = quantity2;
            updateTotalPrice();
        }
    }
document.getElementById('decrease2').addEventListener('click',decreaseQuantity2)
// delate
document.getElementById('trash2').addEventListener("click",removeCard2);

function removeCard2(){
    let card2=document.querySelector('.card2');
    card2.style.display='none';
    document.getElementById('hiddenImage').style.display='block';
    document.querySelector('.quantity2').innerText = 0;
    updateTotalPrice();
}
// like
document.getElementById('like2').addEventListener('click',ColorChange2)
function ColorChange2(){
    document.getElementById('like2').style.color = 'pink';
}

////////// product 3:
var quantity3 = 0;
function increaseQuantity3() {
    quantity3++;
    document.querySelector('.quantity3').innerText = quantity3;
    updateTotalPrice();

}
document.getElementById('increase3').addEventListener('click', increaseQuantity3);

function decreaseQuantity3(){
        if (quantity3 > 0) {
            quantity3--;
            document.querySelector('.quantity3').innerText = quantity3;
            updateTotalPrice();
        }
    }

document.getElementById('decrease3').addEventListener('click',decreaseQuantity3);
// delate
document.getElementById('trash3').addEventListener('click',removeCard3);
function removeCard3(){
 let card3=document.querySelector('.card3');
card3.style.display='none';
 document.getElementById('hiddenImage').style.display='block';
 document.querySelector('.quantity3').innerText = 0;
 updateTotalPrice();
}
// like
document.getElementById('like3').addEventListener('click',ColorChange3)
function ColorChange3(){
    document.getElementById('like3').style.color = 'pink';
}
////////totalPrice:
var PBaskets=document.getElementById('p1');
var NBaskets=document.getElementById('n1');

var PSocks=document.getElementById('p2');
var NSocks=document.getElementById('n2');

var PBag=document.getElementById('p3');
var NBag=document.getElementById('n3');
 

function updateTotalPrice() {
    var total = (parseFloat(PBaskets.innerText) * parseInt(NBaskets.innerText)) +
                (parseFloat(PSocks.innerText) * parseInt(NSocks.innerText)) +
                (parseFloat(PBag.innerText) * parseInt(NBag.innerText));
    document.querySelector('.total').innerText = total;
}



// console.log(totalPrice())