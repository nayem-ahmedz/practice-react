import { useState } from "react";

export default function ProductForm(props){
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity)

        // validation
        if(name.length === 0){
            setError('Name cannot be empty');
            return;
        } else if(price.length === 0){
            setError('Price is required');
            return;
        } else if(quantity.length ===  0){
            setError('Did you forget Quanity?');
            return;
        } else{
            setError('');
        }

        // creating a new product and add it to state, in the lifted one, parent
        const newProductData = {
            name, price, quantity
        }
        props.addProduct(newProductData);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Porduct Name" className="block mb-2 input" />
            <input type="text" name='price' placeholder="Porduct Price" className="block mb-2 input" />
            <input type="text" name='quantity' placeholder="Porduct Quantity" className="block mb-2 input" />
            <input type="submit" value='store' className="btn btn-accent btn-outline" />
            {
                error && <p>{error}</p>
            }
        </form>
    );
}