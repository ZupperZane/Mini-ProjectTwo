
 NameArray = new Array("Croissant","Eclair","LemonBar","Muffin")
 ImageArray = new Array("")
 CartArray = new Array()

function AddToCart(clicked_id) {
    CartArray.push(clicked_id)
      console.log("added to cart");
}
function ClearCart() {
    CartArray = new Array[("")]
        console.log("Cleared cart");
}
function RemoveFromCart(index) {
 CartArray.splice(index,1);
}
function DisplayCartItems(){
    console.log("Accesing Cart")
    const divContainer = document.getElementById("CartItems");
    for (var i=0; i <CartArray.length;i++){
            const p = document.createElement("p");
            const bakedNumber= CartArray[i]
            p.textContent = NameArray[bakedNumber];
            
            const removeButton = document.createElement("Button");
            removeButton.textContent = "Remove";
            removeButton.onClick = RemoveFromCart(i)
             divContainer.appendChild(p);
             divContainer.appendChild(removeButton);
            
    }
}