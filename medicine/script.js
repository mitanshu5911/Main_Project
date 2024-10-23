const filtercategory = document.querySelectorAll('.filter-category input[type = "radio"]');
console.log(filtercategory);


const cards = document.querySelectorAll(".card");


filtercategory.forEach((radio) => {
    
radio.addEventListener("click",() => {
    for(let i of cards){
        const val = radio.value ;
        
        if (i.classList.contains(val)) {
            i.style.display = 'block';  
        } else {
            i.style.display = 'none';  
        }
    }

})

})



const medicinedLink = document.getElementById('medicined');
const medicinedList = document.getElementById('medicined-list');

medicinedList.style.display = 'none';


medicinedLink.addEventListener('mouseover', () => {
    medicinedList.style.display = 'block';
});


medicinedLink.addEventListener('mouseout', () => {
    medicinedList.style.display = 'none';
});


const cart = document.querySelectorAll(".add-to-cart");
console.log(cart);


cart.forEach((button) => {
    button.addEventListener("click",() => {
        alert('Product has beem added to the cart');
    })

})





let count = 0;
const span = document.querySelector(".cart-count")

cart.forEach((button) => {
    button.addEventListener('click',() => {
        count ++;
        span.textContent = count;

    })

})



const cartIcon = document.querySelector('.cart');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-sidebar');


cartIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
});




cart.forEach((button) => {
    button.addEventListener('click',() => {
        const itemid = button.getAttribute('data-id');
        const itemname = button.getAttribute('data-name');
        const itemprice = button.getAttribute('data-price');
        const li = document.createElement("li");
        li.innerText = `${itemid}  ${itemname}   ${itemprice}`
        li.style.backgroundColor = '#ffffff'; 
        li.style.padding = '10px 15px'; 
        li.style.border = '1px solid #ddd'; 
        li.style.borderRadius = '5px'; 
        li.style.margin = '5px 0'; 
        li.style.fontFamily = 'Arial, sans-serif'; 
        li.style.fontSize = '16px'; 
        sidebar.appendChild(li);  
  })
  

}) 





const form = document.querySelector(".navsearch");
const search = document.querySelector(".searchinput");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    document.querySelector(".").style.display = "none";
    const searchTerm = search.value;
    
   

    cart.forEach( (c) => {
        const name = c.getAttribute('data-name');

        if(name.includes(searchTerm)){
            c.parentElement.style.display = 'block';
            console.log("showing");
        }else{
            c.parentElement.style.display = 'none';
            console.log("hiding");
        }

    })
   
   
    
})











