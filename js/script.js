let ProductList= document.getElementById('list-products');
let product =[
    {noun:"Baskets",img:"./assets/baskets.png",p:'This is a basket',price:'100 '},
    {noun:"Socks",img:"./assets/socks.png",p:'This is a socks',price:'20 '},
    {noun:"Bag",img:"./assets/bag.png",p:'This is a bag',price:'50 '},
]

function initializeProducts(){
    for(let i=0; i<product.length;i++){
       let productCard=document.createElement('div');
        productCard.className='card-body';
        productCard.innerHTML= 
            "<div class='card' style='width: 18rem'>"+
                " <img src='"+product[i].img+"'class='card-img-top'/>"+
                "<div class='body'>"+
                        " <h5 class='card-title'>"+product[i].noun+"</h5>"+
                        "<p class='card-text'>"+product[i].p+"</p>"+
                        "<h4 class='unit-price'>$"+parseFloat(product[i].price).toFixed()+"</h4>"+
                    "<div> "+
                        "<i class='fas fa-plus-circle increase' > </i>"+
                        " <span class='quantity'>0</span>"+
                        "<i class='fas fa-minus-circle decrease' ></i>"+
                    " </div>"+
                    "<div>"+
                        "  <i class='fas fa-trash-alt'></i>"+
                        "<i class='fas fa-heart'></i>"+
                    "</div>"+
                "</div>"+
            "</div>";
            ProductList.append(productCard);
}MyEvents()
totalprice()
 }

document.addEventListener("DOMContentLoaded",initializeProducts);

function MyEvents(){
    let productCards=document.getElementsByClassName("card-body")
  
    for (let i = 0; i < productCards.length; i++) {
        let productCard=productCards[i];
        let quantity=productCard.querySelector('.quantity')
        const decreaseBtn = productCard.querySelector('.decrease');
        const increaseBtn = productCard.querySelector('.increase');
        const trash = productCard.querySelector('.fa-trash-alt');
        const heart = productCard.querySelector('.fa-heart');

        increaseBtn.addEventListener('click',function(){
            quantity.innerText=Number(quantity.textContent)+1
            totalprice()
            })


            
        decreaseBtn.addEventListener('click',function(){
            if(quantity.textContent>0){
            quantity.textContent= Number(quantity.textContent)-1
            totalprice()
            }
        })



    trash.addEventListener('click',function(){
        let index=Array.from(productCards).indexOf(productCard)
        productCard.remove()
        product.splice(index,1)
        totalprice()
    })
    

    heart.addEventListener('click',function(){
        heart.classList.toggle('active');
    })

        }
    }
function totalprice(){
    let productCards=document.getElementsByClassName("card-body")
    let total=0
    for (let i = 0; i < productCards.length; i++) {
     const quantity=Number(productCards[i].querySelector(".quantity").textContent)
     const price=Number(productCards[i].querySelector("h4").textContent.slice(1))
    total+=quantity * price

        
    }
    const totalprice= document.getElementById("Total-Price")
    totalprice.textContent=`Total price :  ${total} $`
    // console.log( totalprice)
}
