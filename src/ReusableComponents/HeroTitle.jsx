import PropTypes from 'prop-types';
import { LocationContext } from '../routes/Root';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const HeroTitle = ({title, description}) => {
    const pathname = useContext(LocationContext) 
    console.log(pathname)
    return (
        <div className='px-2 py-6 md:px-60 mt-12'>
           <h1 className={`text-center font-bold text-white mb-6 
            ${pathname==="/" ? "md:text-5xl text-3xl": "text-3xl"}`}>
            {title}
            </h1> 
            <div className="flex justify-center items-center mb-6">
              <p className="text-center text-white/85 w-full md:w-6/12">
                  <span className="">{description}</span>
              </p>
            </div>
            {
                pathname==="/" && <div 
                className="flex justify-center items-center ">
                    <Link to="/dashboard"><button className='bg-white py-2 px-6 rounded-full'>Shop Now</button></Link>
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