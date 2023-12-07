import { useEffect, useState } from "react";
import Product from "./Product/Product";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div className='mt-2'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold mb-8'>Products</h1>
                <div className="flex justify-start items-center mb-6">
                    <Link className="bg-primary text-white px-6 py-2 rounded-lg font-medium" to='/createProduct'>Create New</Link>
                    <div className="flex">
                    <div className="avatar ms-8">
                        <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="mx-6">
                    <p >Andrew Kyu</p>
                    <p className="text-stone-400">User</p>
                    </div>
                    <FiChevronDown/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    products.map(product => <Product
                        key={product.id} product={product}
                    ></Product>)
                }
            </div>
            <hr className="my-8" />
            <div className="flex justify-between my-8">
            <div className="flex items-center gap-3">
                <FaArrowLeft/>
                <p>Previous</p>
                </div>
                <div className="join">
  <button className="join-item btn btn-active">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">...</button>
  <button className="join-item btn">8</button>
  <button className="join-item btn">9</button>
  <button className="join-item btn">10</button>
</div>
                <div className="flex items-center gap-3">
                <p>Next</p>
                <FaArrowRight/>
                </div>
            </div>
        </div>
    );
};

export default Products;