import Header from "../component/CartComponent/Header";
import React from "react";
import CartTotalPlus from "../component/CartComponent/CartTotal/CartTotalPlus";
import CartTotalEmpty from "../component/CartComponent/CartTotal/CartTotalEmpty";
import AppContext from "../context";

function CartPage() {
    const {localCart} = React.useContext(AppContext);

    return (
        <div className="cart-wrapper">
            <Header/>

            {localCart.length === 0? <CartTotalEmpty/> : <CartTotalPlus/>}



        </div>
    );
}

export default CartPage;