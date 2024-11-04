import { useLoaderData } from "react-router-dom";
import Cards from "../components/cards/Cards";
import SideBar from "../components/sidebar/SideBar";
import {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const Home = () => {
    const allCategories = useLoaderData()
    
    const [catData, setCatData] = useState([]);
    const [cat, setCat] = useState("All Products")

    useEffect(()=>{
        fetch("../allProducts.json")
        .then(res=> res.json())
        .then (data=> {
            
            if(cat ==="All Products"){
                setCatData(data)
              }
              else{
                const filterData = data.filter(item=> item.category === cat)
                setCatData(filterData);
              } 
        })
    },[cat])

    const displayCategory = (selectedCat)=>{
          setCat(selectedCat)  
    }

    return (
        <div className="mt-[250px] lg:mt-[390px]">
          <Helmet>
            <title>Home | Gadget Heaven</title>
          </Helmet>
           <div className="mb-12">
            <h1 className="text-center font-bold text-4xl ">Explore Cutting-Edge Gadgets</h1>
           </div>
           <div className="px-4  md:px-16 lg:px-24 p-4 flex gap-6  ">
             <SideBar 
             allCategories = {allCategories}
             displayCategory={displayCategory}
             ></SideBar>
             <Cards catData={catData}></Cards>
           </div>
        </div>
    );
};

export default Home;