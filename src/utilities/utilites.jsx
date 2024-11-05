import { toast } from "react-toastify"

const getCartItem =()=>{
    const cartStr = localStorage.getItem("cart")
    if(cartStr){
        return JSON.parse(cartStr)
    }
    else{
        return []
    }
}

const setCartItem = (id)=>{
    const cart  = getCartItem()
    const isIncules = cart.find(item=> item === id)
    if(isIncules){
        toast.error("This Item Already Added To Cart!")
        return
    }
    else{
        cart.push(id)
        saveCartItemLS(cart)
        toast.success("This Item Added To Cart SuccessFully!")
    }
}

const saveCartItemLS =(item)=>{
    const cartStr = JSON.stringify(item)
        localStorage.setItem("cart", cartStr)
        
}

const removeItemCart =(id)=>{
    const cartItems = getCartItem()
    const remaing = cartItems.filter(item=> item !== id) 
    saveCartItemLS(remaing)
    toast.info("This Item Remove form Your Cart List")
}


const getWishItem =()=>{
    const wishStr = localStorage.getItem("wish")
    if(wishStr){
        return JSON.parse(wishStr)
    }
    else{
        return []
    }
}

const setWishItem = (id)=>{
    const wish  = getWishItem()
    const isIncludes = wish.find(item=> item===id)
    if(isIncludes){
        toast.error("This Item Already Added To Wish-List!")
        return
    }
    else{
        wish.push(id)
        saveWishItemLs(wish)
       toast.success("This Item Added To Wish-List SuccessFully!")
    }
}

const removeItemWish =(id)=>{
    const wishItems = getCartItem()
    const remaing = wishItems.filter(item=> item !== id) 
    saveWishItemLs(remaing)
    toast.info("This Item Remove form Your Wish-List")
}

const saveWishItemLs =(item)=>{
       const wishStr = JSON.stringify(item)
       localStorage.setItem("wish", wishStr)
}

const removeCart = ()=>{
    localStorage.removeItem("cart")
}
const removeWish = ()=>{
    localStorage.removeItem("wish")
}

export {getCartItem,removeCart,removeWish, setCartItem, getWishItem, 
    setWishItem, removeItemCart, removeItemWish}