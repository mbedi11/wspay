
window.onload = function() {
    createShoppingCartID();
}

function createShoppingCartID() {
   const shoppingCartIDfield = document.querySelector('input[name="ShoppingCartID"]');
    shoppingCartIDfield.value = Math.floor(Math.random() * 1000) + 1;
    console.log("CartID: ",shoppingCartIDfield.value);
}

function createSignature(){
    const signatureField = document.querySelector('input[name="Signature"]');
    const shoppingCartIDfield = document.querySelector('input[name="ShoppingCartID"]');
    const shopIDField = document.querySelector('input[name="ShopID"]');
    const TotalAmountField = document.querySelector('input[name="TotalAmount"]');
    const secretKey = "074c6ca334fb4W"
    const secret = shopIDField.value + secretKey + shoppingCartIDfield.value + secretKey + TotalAmountField.value.replace(',', '') + secretKey;         
    console.log("Prehash signature: ",secret);
    signatureField.value = sha512(secret);
    console.log("Signature: ",signatureField.value);
    document.forms['pay'].submit();
}