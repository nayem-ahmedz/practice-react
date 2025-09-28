function getCart(){
    const cart = localStorage.getItem('cart');
    if(cart){
        const storedCart = JSON.parse(cart);
        return storedCart;
    }
    return [];
}

function saveToLocalStorage(cart){
    const newCart = JSON.stringify(cart);
    localStorage.setItem('cart', newCart);
}

const addToCart = productId => {
    const cart = getCart();
    cart.push(productId);
    saveToLocalStorage(cart);
}

const removeFromLocalStorage = (id) => {
    const cart = getCart();
    const newCart = cart.filter(item => item !== id);
    saveToLocalStorage(newCart);
}

export {getCart, addToCart, removeFromLocalStorage as updateLocalStorage};