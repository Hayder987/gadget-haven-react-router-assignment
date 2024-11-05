import { Helmet } from "react-helmet";
import Faq from "../components/Faq/Faq";
import Sponsored from "../components/sponsored/Sponsored";


const Faqs = () => {
    return (
        <div>
            <Helmet>
               <title>FAQs | GadgetHaven</title>
            </Helmet>
            <div className="px-4  md:px-16 lg:px-24 p-4">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="w-full md:w-6/12 text-3xl md:text-5xl font-bold mb-4 text-center">We are Here To Answer All Your Question</h1>
                    <p className="w-full mb-12 md:w-8/12 text-center text-gray-500">We’re here to answer all your questions! 
                        Whether you need guidance, support, or just a little more 
                        information, our team is ready to help. Don’t hesitate to 
                        reach out  we are dedicated to ensuring you have all the 
                        answers you need!
                    </p>
                    <div className="p-2 md:p-10 w-full md:w-8/12">
                       <Faq></Faq>
                    </div>
                    
                </div>
                <Sponsored></Sponsored>
            </div>
            
        </div>
    );
};

export default Faqs;