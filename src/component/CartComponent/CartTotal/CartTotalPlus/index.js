import CardItem from "../../Card/CardItem";
import CardDopAll from "../../Card/CardDopAll";
import {Link} from "react-router-dom";
import React from "react";
import AppContext from "../../../../context";

import style from "./CartTotalPlus.module.scss"
import CardDop from "../../Card/CardDop";

function CartTotalPlus() {
    const {localCart, allPrice, allCount, dopItem} = React.useContext(AppContext);
    return (
        <>
            {/*Тотал в корзине*/}
            <div className={style.contentCard}>
                <div className={style.itemCardPrices}>
                    <ul>
                        <li>{allCount}</li>
                        <li>товаров на</li>
                        <li>{allPrice.toLocaleString()} ₽</li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    {localCart.map((item) => (
                        <CardItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>

                {/*Тотал всей корзины*/}
                <div className={style.cartAllTotal}>
                    <h2>Добавить к заказу?</h2>

                    <div className={style.dopItemList}>
                        <CardDop/>
                        {dopItem.map((item) => (
                            <CardDopAll key={item.id}
                                          {...item}
                            />
                        ))}
                    </div>

                </div>
            </div>
            {/*Кнопка оформить заказ*/}
            <div className={style.totalButtonWrapper}>
                <div className={style.totalInfo}>
                    <p>Сумма заказа</p>
                    <ul>
                        <li>{allPrice.toLocaleString()} ₽</li>
                    </ul>
                </div>

                <Link to="/cart/order">
                    <button className={style.buttonOrder}>К оформлению заказа
                        <img src="/img/icon/arrow.svg" alt="Arrow"/>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CartTotalPlus;