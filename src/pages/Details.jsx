import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HeroTitle from "../ReusableComponents/HeroTitle";
import ShowDetails from "../components/showdetails/ShowDetails";


const Details = () => {

    const allData = useLoaderData()
    const {id} = useParams();
    const [data, setData] = useState()

    useEffect(()=>{
        
        const eachData = allData.find(item=> item.product_id === parseInt(id)) 
        setData(eachData || {})

    },[id, allData])

    return (
        <div className="bg-bodyBg p-6 min-h-[130vh] md:min-h-[95vh] relative">
            <HeroTitle
            title={"Product Details"} 
            description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
            ></HeroTitle>
            <ShowDetails data={data}></ShowDetails>
        </div>
    );
};

export default Details;