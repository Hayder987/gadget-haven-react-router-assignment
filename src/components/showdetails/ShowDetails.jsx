import PropTypes from "prop-types";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { getCartItem, getWishItem, setCartItem, setWishItem } from "../../utilities/utilites";
import { useContext, useState } from "react";
import { CartItemContext, WishItemContext } from "../../routes/Root";


     const ShowDetails = ({data}) => {
        // eslint-disable-next-line no-unused-vars
        const [cartValue, setCartValue] = useContext(CartItemContext)
        // eslint-disable-next-line no-unused-vars
        const [wishValue, setWishValue] = useContext(WishItemContext)
         const{product_title, product_image, price, description,
             specification, availability, rating,product_id
              } = data || {};
              
    const [isDisabled, setIsDisabled] = useState(false);

    const cartBtnHandeller=(id)=>{
         setCartItem(id)
         const cartDataLS = getCartItem()
         setCartValue(cartDataLS)
    }  
    
    const wishBtnHandeller=(id)=>{
        const wish = getWishItem()
        const isIncludes = wish.find(item=> item === id)
        if(isIncludes){
           setIsDisabled(false)
            return
        }
        else{
            setWishItem(id)
            const wishDataLs = getWishItem()
            setWishValue(wishDataLs);
            setIsDisabled(true);
        }
        
   }

   
    return (
        <div className="bg-gray-100 rounded-xl p-4 flex flex-col md:flex-row gap-12
        absolute z-10 top-1/2 left-1/2 transform -translate-y-[30vh] 
         md:-translate-y-[8vh] lg:-translate-y-[20vh] -translate-x-1/2 w-11/12 md:w-8/12">
            <div className="md:w-5/12">
              <img src={product_image} alt="" className="rounded-xl w-full h-[250px] md:h-[450px]" />
            </div>
            <div className="md:w-7/12">
             <h1 className="text-3xl font-bold mb-3">{product_title}</h1>
             <p className="mb-3 font-semibold">
                <span className="">Price: </span>
                <span className="">{price}$ </span>
             </p>
             <div className="mb-3">
                {
                    availability?<button className="border border-green-600 text-green-600 bg-green-50 py-2 px-8 rounded-full">In Stock</button>:
                    <button>Stock Out</button>
                }
             </div>
             <p className="mb-4">{description}</p>
             <div className="">
                <h3 className="text-xl font-semibold">Specification:</h3>
                <ul className="list-decimal py-1 px-4">
                    {
                       data && specification.map((item, idx)=>(
                        <li key={idx} className="my-2">{item}</li>
                      ))  
                    }
                </ul>
                
             </div>
             <div className="">
                <h3 className="text-xl font-semibold">Rating:</h3>
                <div className="flex gap-6 mb-3">
                    <div className="">
                    
                      <Rating
                        style={{ maxWidth: 130 }}
                        value={3}
                        readOnly
                      />
                    </div>
                    <button className="py-2 px-3 rounded-full bg-gray-200">{rating}</button>
                </div>
                <div className="flex gap-6">
                    <button onClick={()=> cartBtnHandeller(product_id)} className="bg-primaryColor flex text-white font-semibold justify-center items-center gap-4 py-2 px-4 rounded-full">
                        <span className="">Add To Card</span>
                        <span className="text-xl"><MdOutlineShoppingCart /></span>
                    </button>
                    <button 
                    disabled={isDisabled}
                    onClick={()=> wishBtnHandeller(product_id)} className={`p-3 ${isDisabled ? "bg-gray-300":"bg-white"} rounded-full border-2`}>
                    <FaRegHeart />
                    </button>
                </div>
                
             </div>
            </div>
            
        </div>
    );
};

ShowDetails.propTypes={
    data: PropTypes.object
}

export default ShowDetails;