import { use, useEffect, useState } from 'react';
import Phone from './Phone';
import { getCart, addToCart, updateLocalStorage } from '../utils/phone-cart';

function Phones({fetchPhones}){
    const phones = use(fetchPhones);
    const [cart, setCart] = useState([]);
    const handleCart = (product) => {
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        addToCart(product.id);
    }
    useEffect(()=>{
        const storedCartIds = getCart();
        const storedCart = [];
        for(const id of storedCartIds){
            const matched = phones.find(phone => phone.id === id);
            if(matched){
                storedCart.push(matched);
            }
        }
        setCart(storedCart);
    }, [])
    const removeFromCart = (id) => {
        const remainingCartItems = cart.filter(item => item.id !== id);
        setCart(remainingCartItems);
        updateLocalStorage(id);
    }
    return(
        <div>
            <h1>Phones : {phones.length}</h1>
            <h3>Added to Cart : {cart.length}</h3>
            <ul>
                {
                    cart.map(product => <li key={product.id}>{product.model} <button onClick={() => removeFromCart(product.id)}>x</button></li>)
                }
            </ul>
            <h2>Our Products</h2>
            <div className='phone-container'>
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone} handleCart={handleCart} />)
                }
            </div>
        </div>
    );
}

export default Phones;