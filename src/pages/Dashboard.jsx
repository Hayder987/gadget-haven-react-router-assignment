import { NavLink } from "react-router-dom";
import HeroTitle from "../ReusableComponents/HeroTitle";
import { FaSortAmountUp } from "react-icons/fa";


const Dashboard = () => {
    
    return (
        <div className="min-h-[calc(100vh-420px)]">
            <div className="bg-primaryColor py-6  ">
               <h1 className="text-center text-white text-3xl mb-4 font-semibold">Dashboard</h1>
               <p className="text-white/70 text-center ">Explore the latest gadgets that will take your experience to the next level. 
                  From smart devices to the coolest accessories, we have it all!</p>
               <div className="">
               <div role="tablist" className="  flex justify-center items-center py-6">
                 <NavLink role="tab" className="tab flex justify-center items-center">
                    <button className="border-2 text-white font-semibold py-2 px-10 rounded-full">Cart</button>
                 </NavLink>
                 <NavLink role="tab" className="tab ">
                    <button className="border-2 text-white font-semibold py-2  px-6 rounded-full">Wishlist</button>
                 </NavLink>
               </div>
               </div>
            </div>
            <div className="flex justify-between items-center px-4  md:px-16 lg:px-24 py-8">
                <h1 className="text-2xl font-bold hidden md:flex">Cart</h1>
                <div className="flex gap-6 justify-center items-center">
                    <h1 className="text-base md:text-2xl font-bold">
                        <span className="">Total cost: </span>
                        <span className="">365</span>
                    </h1>
                    <button className="flex gap-3 justify-center items-center
                    border border-primaryColor py-2 px-4 rounded-full font-bold text-primaryColor
                    duration-300 hover:bg-primaryColor hover:text-white ">
                        <span className="">Sort by Price</span>
                        <span className=""><FaSortAmountUp /></span>
                    </button>
                    <button className="border bg-primaryColor text-white border-primaryColor py-2 px-4 rounded-full font-medium
                    hover:bg-white hover:text-primaryColor">Purchase</button>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;