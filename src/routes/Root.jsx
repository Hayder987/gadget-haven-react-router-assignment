import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation} from "react-router-dom";
import HomeNav from "../components/home-nav/HomeNav";

const Root = () => {

    const {pathname} = useLocation()
    console.log(pathname)

    return (
        <div className="">
             {
                pathname ==='/' ? <HomeNav></HomeNav> : <NavBar></NavBar>
             }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;