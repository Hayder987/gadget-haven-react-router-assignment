
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Banner from "./Banner";
import FloatBanner from "../FloatBanner/FloatBanner";



const HomeNav = () => {
    const navList = <>
    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/statistic"><li>Statistics</li></NavLink>
    <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
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
             <h1 className=" text-xl text-white font-bold">Gadget Heaven</h1>
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
               <div className="bg-white flex justify-center items-center p-3 rounded-full">
                <button className="text-xl"><AiOutlineShoppingCart /></button>
               </div>
               <div className="bg-white flex justify-center items-center p-3 rounded-full">
                <button className="text-xl"><FaRegHeart /></button>
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