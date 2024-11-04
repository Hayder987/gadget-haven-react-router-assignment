import { useRouteError } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";


const ErrorPage = () => {
    const error = useRouteError();
    const {status, data} = error;
    console.log(error)

    return (
        <div>
            <div className="flex flex-col justify-center items-center p-4 md:p-12">
              <h1 className="text-6xl text-red-500 mb-6"><IoWarningOutline /></h1>
              <h2 className="text-5xl font-bold mb-6">{status}</h2>
              <h3 className="text-4xl font-bold">{data}</h3>
              <img src="https://i.ibb.co.com/nQqnRLf/page-Not-found.jpg" alt="" className="" />
            </div>
        </div>
    );
};

export default ErrorPage;