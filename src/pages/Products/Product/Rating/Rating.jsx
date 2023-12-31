
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ stars }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return <span key={index}>
            {
                stars >= index + 1 ? (
                    <FaStar className='icon' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='icon' />
                ) : (
                    <AiOutlineStar className='icon' />
                )}
        </span>

    })



    return (
        <div className="flex justify-start items-center">
            <p className='flex text-amber-500 me-2'>{ratingStar}</p>
            <p className="text-amber-500 ">{stars}</p>
        </div>
    );
};

export default Rating;