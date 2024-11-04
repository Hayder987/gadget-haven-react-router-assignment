import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { MdDeleteForever } from "react-icons/md";


const WishDeatils = ({data, wishDeleteHandeller}) => {
    return (
        <div className="grid gap-4 grid-cols-1 px-4  p-4  md:px-16 lg:px-24 py-8">
          <Helmet>
            <title>dashbord|wish| Gadget Haven</title>
          </Helmet>
            {
                data.map(item=> (
                    <div key={item.product_id} className="relative flex gap-10 border-2 rounded-xl p-3">
                      <div className="w-full md:w-2/12">
                        <img src={item.product_image} alt="" className="w-full rounded-xl h-56" />
                      </div>  
                      <div className="w-full md:w-10/12 ">
                       <div className="py-3 md:py-12">
                         <h3 className="text-2xl font-bold mb-2">{item.product_title}</h3>
                         <p className="mb-3">{item.description}</p>
                         <h4 className="font-bold">Price: {item.price}$</h4>
                       </div>
                       <div onClick={()=>wishDeleteHandeller(item.product_id)} className="absolute top-0 right-0 md:top-16 md:right-4 p-3 h-14 w-14 rounded-full border-2 flex justify-center items-center">
                        <p className="text-4xl text-red-500"><MdDeleteForever /></p>
                       </div>
                      </div>

                    </div>
                ))
            }
        </div>
    );
};

WishDeatils.propTypes ={
    data:PropTypes.array.isRequired
}


export default WishDeatils;