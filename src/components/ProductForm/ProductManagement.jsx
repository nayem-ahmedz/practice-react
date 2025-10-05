import { useState } from "react";
import ProductForm from "./ProductForm";
import PorductTable from "./ProductTable";

export default function ProductManagement(){
    const [products, setProducts] = useState([]);
    const addProduct = (product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
    }
    return(
        <div className="m-5">
            <ProductForm addProduct={addProduct} />
            <PorductTable products={products} />
        </div>
    );
}