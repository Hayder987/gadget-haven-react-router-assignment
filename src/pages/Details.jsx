import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const allData = useLoaderData()
    const {id} = useParams();
    const [data, setData] = useState(null)

    useEffect(()=>{
       const eachData = allData.find(item=> item.product_id === parseInt(id)) 
       setData(eachData)

    },[id, allData])

    return (
        <div>
            
            
        </div>
    );
};

export default Details;