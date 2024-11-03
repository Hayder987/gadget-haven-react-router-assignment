import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation} from "react-router-dom";
import HomeNav from "../components/home-nav/HomeNav";
import { createContext } from 'react';
export const LocationContext = createContext();

const Root = () => {

    const {pathname} = useLocation()


    return (
        <LocationContext.Provider value={pathname}>
           <div className="bg-bodyBg md:p-3">
             {
                pathname ==='/' ? <HomeNav></HomeNav> : <NavBar></NavBar>
             }
            <div className="min-h-[calc(100vh-450px)]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
           </div>
        </LocationContext.Provider>
        
    );
};

export default Root;