import React from "react";
import style from "./CartTotalEmpty.module.scss"
import {Link} from "react-router-dom";

function CartTotalEmpty() {
    return (
        <>
            <div className={style.cartEmptyWrapper}>
                <img src="/img/emptyCart.svg" alt="Cart-Empty"/>
                <h3>Ой, пусто!</h3>
                <p>Ваша корзина пуста, откройте "Меню" и выбирите понравившийся товар.</p>
                <Link to="/">
                    <button>Вернуться в меню</button>
                </Link>

            </div>
        </>
    )
}

export default CartTotalEmpty;