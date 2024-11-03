import PropTypes from "prop-types";
import { useState } from "react";



const SideBar = ({allCategories, displayCategory}) => {
    const [id, setId] = useState(1)
    const catBtnHandeler = (id)=>{
           setId(id)
    }
    return (
        <div className="w-2/12">
          <div className=" py-12 flex flex-col gap-4  rounded-lg border bg-white p-6">
            {
              allCategories.map(item =>(
                  <button onClick={()=> {catBtnHandeler(item.id);displayCategory(item.category)}} key={item.id} 
                   className={` ${item.id===id ? "bg-primaryColor text-white":"bg-gray-100 text-black"} py-3 rounded-full`}>{item.category}
                  </button>
              ))
            }  
          </div>
        </div>
    );
};

SideBar.propTypes={
    allCategories: PropTypes.array,
    displayCategory: PropTypes.func
}

export default SideBar;