import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const Card = ({category}) => {
    const navigate = useNavigate();

    return (
        <div className="border-2 p-4 flex rounded-xl bg-gray-100">
            <div className="bg-white rounded-xl w-full p-4 flex flex-col justify-center items-center">
                <div className="flex-grow ">
                   <div className="flex justify-center items-center ">
                      <img src={category.product_image} alt="" 
                      className="h-[300px] w-full rounded-xl" />
                   </div>
                   <h1 className="text-2xl font-bold mb-3 text-center">{category.product_title}</h1>
                   <p className="text-gray-400 font-medium mb-4 text-center">
                       <span className=" ">Price: </span>
                       <span className="">{category.price}$</span>
                   </p>
                </div>
                <button onClick={()=> navigate(`/post/${category.product_id}`)}
                 className="border-2 border-primaryColor text-primaryColor py-3 px-6 rounded-full
                 font-semibold duration-300 hover:bg-primaryColor hover:text-white">
                    View Details
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    category: PropTypes.object
}

export default Card;