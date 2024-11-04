
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
    cart.push(id)
    const cartStr = JSON.stringify(cart)
    localStorage.setItem("cart", cartStr)
}

export {getCartItem, setCartItem}