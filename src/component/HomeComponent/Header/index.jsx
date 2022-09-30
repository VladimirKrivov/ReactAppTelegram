import BestSales from "../../BestSales";
import Menu from "../Menu";
import styles from './Header.module.scss'

import { Link } from "react-router-dom";
import React from "react";
import AppContext from "../../../context";


function Header() {
    const {localCart, allPrice, category} = React.useContext(AppContext);

    return (
        <header>
            <div className={styles.headerInfo}>
                <img className="mr-5" width={26} height={26} src="/img/icon/logo.png" alt="Логотип"/>
                <p className="fw-bold">ДОДО ПИЦЦА</p>
            </div>
            <BestSales/>
            <div className={styles.menuWrapper}>
                {category.map((item) => (
                    <Menu
                        key={item.id}
                        {...item}
                    />
                ))}

            </div>
            <Link to="/cart">

                <div className={`${styles.cartButtonWrapper} ${localCart.length > 0 ? styles.buttonCardNone : ''}`}>
                    <p>Перейти в корзину</p>
                    <p>{allPrice.toLocaleString()} ₽</p>
                </div>
            </Link>

        </header>
    );
}

export default Header;