// localStorage.setItem("card", "19,72");
// let products = localStorage.getItem("card")
// console.log(products)

// setTimeout(() => {
//     localStorage.removeItem("card")
// }, 5000)

// document.cookie = "cusername=Rasim; expires=Thu, 18 Dec 2022 02:00:00 UTC";

let addToCart = document.querySelectorAll("#product .card .card-body a");

let basketCount = document.getElementById("basketCount");
let cart2 = localStorage.getItem("cart");

if (!(cart2 == null || cart2 == "")) {
    basketCount.textContent = cart2.split(",").length;

    addToCart.forEach(item => {
        let id = item.dataset.id;
        if (cart2.split(",").includes(id)) {
            item.classList.remove("btn-primary");
            item.classList.add("btn-success");
        }
    });
}




addToCart.forEach(prd => {
    prd.addEventListener("click", function(e) {
        e.preventDefault();

        let id = this.dataset.id;
        let cart = localStorage.getItem("cart");

        if (cart == null || cart == "") {
            localStorage.setItem("cart", id);
            basketCount.textContent = 1;
            this.classList.remove("btn-primary");
            this.classList.add("btn-success");
        } else {
            let cartArr = cart.split(",");
            let isExist = cartArr.includes(id);
            if (!isExist) {
                localStorage.setItem("cart", cart + "," + id);
                basketCount.textContent = cartArr.length + 1;
                this.classList.remove("btn-primary");
                this.classList.add("btn-success");
            } else {
                let newCartArr = cartArr.filter(item => item != id);
                localStorage.setItem("cart", newCartArr.join(","));
                basketCount.textContent = newCartArr.length > 0 ? newCartArr.length : "";
                this.classList.remove("btn-success");
                this.classList.add("btn-primary");
            }
        }
    })
});

function myFunction()
{

var input = document.getElementById("searchInput");

var filter = input.value.toLowerCase();

var nodes =document.getElementsByClassName('card-body');
console.log(nodes)
 var p =document.getElementsByClassName('card-text');
for ( i=0; i< nodes.length; i++)

{
    if (nodes[i].innerText.toLowerCase().includes(filter))
    {
        nodes[i].style.display = "block";
     
    }
    else {
        nodes[i].style.display = "none";
        
      }
}






}