import './Product.css'

import { AiOutlineDelete } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import Rating from './Rating/Rating';

const Product = ({ product }) => {
  const { description, image, price, rating } = product;
  const stars= rating.rate;
  return (
    <div className='product'>
      <div className="hero ">
        <div>
          <div className='flex justify-center'>
            <img src={image} className="w-40 rounded-lg shadow-2xl" />
          </div>
          <hr className='
          my-2' />
          <div className='px-5 py-3' >
            <div className='flex justify-between'>
              <p className='font-bold'>${price}</p>
              <button className='delete_button '><AiOutlineDelete /></button>
            </div>
            <Rating stars={stars}></Rating>
            <p className="">{description.slice(0, 50)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;