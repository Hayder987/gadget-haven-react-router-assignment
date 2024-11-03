import { useLoaderData } from "react-router-dom";
import Cards from "../components/cards/Cards";
import SideBar from "../components/sidebar/SideBar";



const Home = () => {
    const allCategories = useLoaderData()
    
    return (
        <div className="mt-[250px] lg:mt-[390px]">
           <div className="mb-12">
            <h1 className="text-center font-bold text-4xl ">Explore Cutting-Edge Gadgets</h1>
           </div>
           <div className="px-4  md:px-16 lg:px-24 p-4 flex gap-6  ">
             <SideBar allCategories = {allCategories}></SideBar>
             <Cards></Cards>
           </div>
        </div>
    );
};

export default Home;