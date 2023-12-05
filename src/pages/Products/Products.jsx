import { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])
    return (
        <div className='mt-3'>
            <h1 className='text-2xl font-bold'>{products.length}</h1>
            <div className="grid grid-cols-3 gap-8">
            {
                products.map(product => <Product
                key={product.id} product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;