import React from "react";
import style from "./StatusOrder.module.scss"
import {Link} from "react-router-dom";

function CartTotalEmpty() {
    return (
        <>
            <div className={style.cartEmptyWrapper}>
                <img src="/img/emptyCart.svg" alt="Cart-Empty"/>
                <h3>Спасибо за заказ!</h3>
                <p>Ваш заказ принят в обработку! Ожидайте обновления статуса заказа в чате телеграм!</p>
                <Link to="/">
                    <button>Вернуться в меню</button>
                </Link>

            </div>
        </>
    )
}

export default CartTotalEmpty;