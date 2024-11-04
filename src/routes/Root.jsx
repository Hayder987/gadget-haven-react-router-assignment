import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation} from "react-router-dom";
import HomeNav from "../components/home-nav/HomeNav";
import { createContext, useState } from 'react';
import { getCartItem, getWishItem } from "../utilities/utilites";
export const LocationContext = createContext();
export const CartItemContext = createContext();
export const WishItemContext = createContext();


const Root = () => {
  const cartData = getCartItem()
  const wishData = getWishItem()
    const [cartValue, setCartValue] = useState(cartData)
    const [wishValue, setWishValue] = useState(wishData)

    const {pathname} = useLocation()

    return (
      <WishItemContext.Provider value={[wishValue, setWishValue]}>
        <CartItemContext.Provider value={[cartValue, setCartValue]}>
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
        </CartItemContext.Provider>
      </WishItemContext.Provider>
        
        
        
    );
};

export default Root;