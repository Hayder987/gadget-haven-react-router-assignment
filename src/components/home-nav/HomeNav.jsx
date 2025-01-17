
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Banner from "./Banner";
import FloatBanner from "../FloatBanner/FloatBanner";
import { useContext } from "react";
import { CartItemContext, WishItemContext } from "../../routes/Root";



const HomeNav = () => {
  const [cartValue, setCartValue] = useContext(CartItemContext)
  const [wishValue, setWishValue] = useContext(WishItemContext)
    const navList = <>
    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/statistic"><li>Statistics</li></NavLink>
    <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
    <NavLink to="/faqs"><li>FAQs</li></NavLink>
  </>
  return (
      <div className="border-2 p-1 rounded-3xl relative">
        <div className="px-4  md:px-16 lg:px-24 p-4 min-h-[75vh] lg:min-h-[90vh] rounded-3xl bg-primaryColor ">
         <div className="navbar ">
           <div className="navbar-start">
             <div className="dropdown">
               <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h8m-8 6h16" />
                 </svg>
               </div>
               <ul
                 tabIndex={0}
                 className="menu menu-sm  font-medium  flex flex-col gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                 {
                  navList
                 }
               </ul>
             </div>
             <div className="flex justify-center items-center gap-4">
                 <img src="https://i.ibb.co.com/bsgMcys/online-shop.webp" alt="" className="w-14 h-14 rounded-full" />
                 <h1 className=" text-xl font-bold text-white">Gadget Heaven</h1>
             </div>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu text-white menu-horizontal font-medium flex gap-10 px-1">
               {
                  navList
               }
             </ul>
           </div>
           <div className="navbar-end">
             <div className="flex gap-3 ">
               <div className="bg-white relative flex justify-center items-center p-3 rounded-full">
                <button className="text-xl"><AiOutlineShoppingCart /></button>
                <p className="absolute text-red-200 font-semibold 
                -top-4 right-0">{cartValue.length}</p>
               </div>
               <div className="bg-white relative flex justify-center items-center p-3 rounded-full">
                <button className="text-xl"><FaRegHeart /></button>
                <p className="absolute text-red-200 font-semibold 
                -top-4 right-0">{wishValue.length}</p>
               </div>
             </div>
           </div>
         </div>
         <Banner></Banner>        
      </div>
      <FloatBanner></FloatBanner>
      </div>
  );
};

export default HomeNav;