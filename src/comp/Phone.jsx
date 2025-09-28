export default function Phone({phone, handleCart}){
    return(
        <div>
            <h3> {phone.model} </h3>
            <p>Price {phone.price}</p>
            <p>Release Year : {phone.releaseYear}</p>
            <button onClick={() => handleCart(phone)}>Add To Cart</button>
        </div>
    );
}