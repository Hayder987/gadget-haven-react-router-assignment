import PropTypes from "prop-types";
import { useState } from "react";



const SideBar = ({allCategories}) => {
    const [id, setId] = useState(null)
    const catBtnHandeler = (id)=>{
           setId(id)
    }
    return (
        <div className="w-2/12 py-12 flex flex-col gap-4  rounded-lg border bg-white p-6">
          {
            allCategories.map(item =>(
                <button onClick={()=> catBtnHandeler(item.id)} key={item.id} 
                className={` ${item.id===id ? "bg-primaryColor text-white":"bg-gray-100 text-black"} py-3 px-5 rounded-full`}>{item.category}
                </button>
            ))
          }  
        </div>
    );
};

SideBar.propTypes={
    allCategories: PropTypes.array  
}

export default SideBar;