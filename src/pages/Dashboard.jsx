import {  useLoaderData, useNavigate} from "react-router-dom";
import { FaSortAmountUp } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CartDetails from "../components/CartDetails/CartDetails";
import { getCartItem, getWishItem, removeCart, removeItemCart, removeItemWish, removeWish } from "../utilities/utilites";
import WishDeatils from "../components/CartDetails/WishDeatils";
import { CartItemContext, WishItemContext } from "../routes/Root";
import { Helmet } from "react-helmet";



const Dashboard = () => {
    const allData = useLoaderData()
    const [cartDataAll, setcartDataAll] = useState([])
    const [wishDataAll, setwishDataAll] = useState([])
    const [cartTypes, setCartTypes] = useState("cart");
    // eslint-disable-next-line no-unused-vars
    const [cartValue, setCartValue] = useContext(CartItemContext)
    // eslint-disable-next-line no-unused-vars
    const [wishValue, setWishValue] = useContext(WishItemContext)
    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
        const cartId = getCartItem()
        const cartData = [...allData].filter(item=> cartId.includes(item.product_id))
         setcartDataAll( cartData)
         const money = cartData.reduce((a, b) => a + b.price, 0);
         setTotal(money)
        
    },[allData])

    useEffect(()=>{
      const wishId = getWishItem()
      const wishData = [...allData].filter(item=> wishId.includes(item.product_id))
       setwishDataAll(wishData)
      
  },[allData])
    
    const cartBtnHandeller =()=>{
             const cartId = getCartItem()
            const cartData = [...allData].filter(item=> cartId.includes(item.product_id))
            setcartDataAll(cartData)
            setCartTypes("cart")
            const money = cartData.reduce((a, b) => a + b.price, 0);
            setTotal(money)                
    }

    const wishBtnHandeller =()=>{
            const wishId = getWishItem()
            const wishData = [...allData].filter(item=> wishId.includes(item.product_id))
            setwishDataAll(wishData)  
            setCartTypes("wish")
          
    }

    const cartDeleteHandeller=(id)=>{
        removeItemCart(id)
        const remaing = cartDataAll.filter(item=> item.product_id !==id)
        const money = remaing.reduce((a, b) => a + b.price, 0);
        setTotal(money)
        setcartDataAll(remaing)
        setCartValue(remaing)
        
    }

    const wishDeleteHandeller=(id)=>{
        removeItemWish(id)
        const remaing = wishDataAll.filter(item=> item.product_id !==id)
        setwishDataAll(remaing)
        setWishValue(remaing)

    }

    const shortHandler = () => {
        const sortedCartData = [...cartDataAll].sort((a, b) => b.price - a.price);
        setcartDataAll(sortedCartData); 
     };

     const purchaseBtnHandler=()=>{
        const cart = getCartItem()
        const cartData = [...allData].filter(item=> cart.includes(item.product_id))
        const money = cartData.reduce((a, b) => a + b.price, 0);
        setTotal(money) 
        
     }

      const navigate = useNavigate()
     const closeBtnHandeler=()=>{
        setcartDataAll([])
        setwishDataAll([]) 
        removeCart()
        removeWish()
        setCartValue([])
        setWishValue([])
        navigate("/")
     }
    

    return (
        <div className="min-h-[calc(100vh-420px)]">
          <Helmet>
            <title>dashboard|Gadget Haven</title>
          </Helmet>
            <div className="bg-primaryColor py-6  ">
               <h1 className="text-center text-white text-3xl mb-4 font-semibold">Dashboard</h1>
               <p className="text-white/70 text-center ">Explore the latest gadgets that will take your experience to the next level. 
                  From smart devices to the coolest accessories, we have it all!</p>
               <div className="flex gap-6 justify-center items-center py-6">
                 <button onClick={()=> {cartBtnHandeller()}} className={`border-2 ${cartTypes==="cart" ? "bg-white text-black": "text-white"}  font-semibold py-2 px-10 rounded-full`}>Cart</button>
                 <button onClick={()=> {wishBtnHandeller()}} className={`border-2 ${cartTypes==="wish" ? "bg-white text-black": "text-white"}  font-semibold py-2 px-10 rounded-full`}>Wishlist</button>
               </div>
            </div>
            <div className="flex justify-between items-center px-4  md:px-16 lg:px-24 py-8">
                <h1 className="text-2xl font-bold hidden md:flex">{cartTypes}</h1>
                <div className="flex gap-6 justify-center items-center">
                    {
                      cartTypes==="cart"? <h1 className="text-base md:text-2xl font-bold">
                      <span className="">Total cost: </span>
                      <span className="">{total}$</span>
                  </h1>: ""
                    }
                    <button onClick={shortHandler} className="flex gap-3 justify-center items-center
                    border border-primaryColor py-2 px-4 rounded-full font-bold text-primaryColor
                    duration-300 hover:bg-primaryColor hover:text-white ">
                        <span className="">Sort by Price</span>
                        <span className=""><FaSortAmountUp /></span>
                    </button>
                      {
                        cartTypes === "cart" ? (
                          <button
                            disabled={total <= 0} 
                            onClick={() => {
                              purchaseBtnHandler();
                              document.getElementById('PriceModal').showModal();
                            }}
                            className={`border ${total<=0?"bg-gray-300 text-white":"bg-primaryColor text-white"} border-primaryColor py-2 px-4 rounded-full font-medium
                                       hover:bg-white hover:text-primaryColor`}
                          >
                            Purchase
                          </button>
                        ) : (
                          ""
                        )
                      }
                </div>

                {/* Modal */}
    
                  <dialog id="PriceModal" className="modal modal-middle sm:modal-middle">
                    <div className="modal-box">
                      <div className=" flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co.com/3CtZsbL/Group.png" alt="" className="mb-4" />
                         <h1 className="text-3xl font-bold mb-4">Payment Successfully</h1>
                        <p className="text-gray-500 font-semibold">Thanks For Purchasing</p>
                        <p className="text-gray-500 font-semibold">Price: {total}$</p>
                      </div>
                      <div className="modal-action w-full">
                        <form method="dialog" className="w-full flex justify-center items-center">
                          <button onClick={closeBtnHandeler} className="py-3 px-8 rounded-full bg-primaryColor text-white ">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

            </div>
            {
                cartTypes==="cart" ?<CartDetails 
                cartDataAll={cartDataAll}
                cartDeleteHandeller={cartDeleteHandeller}
                ></CartDetails>: 
                <WishDeatils 
                wishDataAll={wishDataAll}
                wishDeleteHandeller={wishDeleteHandeller}
                ></WishDeatils>
            }
        </div>
    );
};

export default Dashboard;