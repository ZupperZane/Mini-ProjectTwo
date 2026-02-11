
 
 // TODO: Cart counter, total price in cart, live cart maybe, second click on cart should close it if live cart, unified styling of buttons
 // TODO: README.md. Check rubric for requirements

 
 NameArray = new Array("Croissant","Eclair","LemonBar","Muffin")
 ImageArray = new Array("")
 CartArray = new Array()

function AddToCart(clicked_id) {
    CartArray.push(clicked_id)
      console.log(CartArray);

}
function ClearCart() {
    CartArray = new Array("")
        console.log("Cleared cart");
              console.log(CartArray)
}
function RemoveFromCart(index) {
    /**Filter or store id# remove 1 of an id instance */
     console.log("Removing");
 CartArray.splice(CartArray[index],1);
 console.log(index);
}
function DisplayCartItems(){
     let num0 =0;
        let num1 =0;
            let num2 =0;
                let num3 =0;
      for (var i=0; i <CartArray.length;++i){
        //Count of each type of item
        if(CartArray[i] == "0"){
            //Add to count of item type 0
            num0++;
        }
                if(CartArray[i] == "1"){
                        //Add to count of item type 1
                        num1++;
        }
                if(CartArray[i] == "2"){
                        //Add to count of item type 2
                        num2++;
        }
                if(CartArray[i] == "3"){
                        //Add to count of item type 3
                        num3++;
        }
      }
      const tempArray = new Array(num0,num1,num2,num3);
    const divContainer = document.getElementById("CartItems");
    for (var i=0; i <tempArray.length;++i){
        //Displays indexed Item
        if (tempArray[i]>0){
            const p = document.createElement("p");
            const bakedNumber= i;
            p.textContent = NameArray[bakedNumber]+" : "+tempArray[i];
            const removeButton = document.createElement("Button");
            removeButton.textContent = "Remove";
            removeButton.onclick  = () => RemoveFromCart(i);
            divContainer.appendChild(p);
            divContainer.appendChild(removeButton);
        }
    }
    //Clear Button 
    const ClearButton = document.createElement("Button");
    ClearButton.textContent = "Clear Cart";
    ClearButton.onclick = () => ClearCart();
    divContainer.appendChild(ClearButton);
    // Close Cart Button Replace Later
    const CloseCart = document.createElement("Button");
    CloseCart.textContent = "Close Cart";
    CloseCart.onclick = () => CloseCart();
    divContainer.appendChild(CloseCart);
}
