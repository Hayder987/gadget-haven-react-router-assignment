import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";


const NavBar = () => {
    const navList = <>
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink to="/statistic"><li>Statistics</li></NavLink>
      <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
    </>
    return (
        <div className="px-4 md:px-16 lg:px-24 p-4 ">
           <div className="navbar ">
             <div className="navbar-start">
               <div className="dropdown">
                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                   className="menu menu-sm font-medium  flex flex-col gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   {
                    navList
                   }
                 </ul>
               </div>
               <h1 className=" text-xl font-bold">Gadget Heaven</h1>
             </div>
             <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal font-medium flex gap-10 px-1">
                 {
                    navList
                 }
               </ul>
             </div>
             <div className="navbar-end">
               <div className="flex gap-3 ">
                 <div className="border-2 flex justify-center items-center p-3 rounded-full">
                  <p className="text-xl"><AiOutlineShoppingCart /></p>
                 </div>
                 <div className="border-2 flex justify-center items-center p-3 rounded-full">
                  <p className="text-xl"><FaRegHeart /></p>
                 </div>
               </div>
             </div>
           </div>
        </div>
    );
};

export default NavBar;