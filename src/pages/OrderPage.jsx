import Header from "../component/OrderPageComponent/Header";
import "../scss/orderPage.scss"
import React from "react";
import AppContext from "../context";

import OrderForm from "../component/OrderPageComponent/OrderForm";
import CartTotalEmpty from "../component/CartComponent/CartTotal/CartTotalEmpty";


function OrderPage() {
    const {localCart, allPrice, allCount} = React.useContext(AppContext);

    return (
        <div className="d-flex flex-column orderPage">
            <Header/>
            {localCart.length === 0 ? <CartTotalEmpty/> : <OrderForm/>}

        </div>
    );
}

export default OrderPage;