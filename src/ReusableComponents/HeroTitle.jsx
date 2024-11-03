import PropTypes from 'prop-types';
import { LocationContext } from '../routes/Root';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const HeroTitle = ({title, description}) => {
    const pathname = useContext(LocationContext) 
    return (
        <div className={`px-2 ${pathname==="/" ? "" : "bg-primaryColor"} py-6 lg:px-60 mt-12`}>
           <h1 className={`text-center font-bold text-white mb-6 
            ${pathname==="/" ? "md:text-5xl text-3xl": "text-3xl"}`}>
            {title}
            </h1> 
            <div className="flex justify-center items-center mb-8">
              <p className="text-center text-white/85 w-full lg:w-7/12">
                  <span className="">{description}</span>
              </p>
            </div>
            {
                pathname==="/" && <div 
                className="flex justify-center items-center ">
                    <Link to="/dashboard"><button className='bg-white text-primaryColor py-3 px-8 font-semibold duration-300
                    hover:border-white hover:border hover:bg-primaryColor hover:text-white 
                    rounded-full'>Shop Now</button></Link>
                </div>
            }
        </div>
    );
};

HeroTitle.propTypes ={
    title: PropTypes.string,
    description: PropTypes.string
}

export default HeroTitle;