import './Product.css'
import { AiOutlineDelete } from "react-icons/ai";
import Rating from './Rating/Rating';
import Swal from 'sweetalert2';



const Product = ({ product }) => {
  const { description, image, price, rating, id,title } = product;
  const stars = rating.rate;
  const handleDelete = (id) => {
    
    
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-light ms-4",
        cancelButton: "btn btn-light"
      },
      buttonsStyling: false,
      showCloseButton:true,
    });
    swalWithBootstrapButtons.fire({
      title: "Delete Product",
      text: `Are you sure you want to delete “${title}” from your lists?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });







    console.log(id)
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  }


  return (
    <div className='product'>
      <div className="hero ">
        <div>
          <div className='flex justify-center'>
            <img src={image} className="w-40 h-52 rounded-lg shadow-2xl" />
          </div>
          <hr className='
          my-2' />
          <div className='px-5 py-3' >
            <div className='flex justify-between'>
              <p className='font-bold'>${price}</p>
              <button onClick={() => handleDelete(id)} className='delete_button p-2'><AiOutlineDelete /></button>
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