import { useEffect, useState } from "react";


const Sponsored = () => {
    const [allpatner, setAllPatner] = useState([]);

    useEffect(()=>{
        fetch("./partner.json")
        .then(res=> res.json())
        .then(data=> setAllPatner(data));
    }, [])

    return (
        <div className="mt-12">
            <div className="border-b-2 pb-6 ">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Global partner</h1>
            </div>
            <div className="flex justify-center items-center p-6">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              {
                allpatner.map(item=>(
                    <img key={item.id} src={item.imagePath} alt="" className="w-24 h-16" />
                ))
              }  
              </div>
            </div>
            
        </div>
    );
};

export default Sponsored;