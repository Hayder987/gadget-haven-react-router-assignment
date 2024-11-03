

const FloatBanner = () => {
    return (
        <div className=" border-2 border-bodyBg p-4 rounded-3xl 
        absolute z-10 top-1/2 left-1/2 transform translate-y-[90%] 
         md:translate-y-[20vh] lg:translate-y-[16vh] -translate-x-1/2 w-11/12 md:w-8/12">
            <div className="">
                <img src="https://i.ibb.co.com/SNN1kx2/banner.jpg" alt="" 
                className="w-full lg:h-[550px] rounded-2xl" />
            </div>
        </div>
    );
};

export default FloatBanner;