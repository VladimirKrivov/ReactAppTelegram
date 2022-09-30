import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header>
            <div className={styles.headerInfo}>

                <Link to="/">
                    <div className={styles.arrowWrapper}>
                        <img width={20} height={20} src="/img/icon/arrow-icon.svg" alt="Arrow"/>
                    </div>
                </Link>


                <img className="mr-5" width={26} height={26} src="/img/icon/logo.png" alt="Логотип"/>
                <p className="fw-bold">ДОДО ПИЦЦА</p>
            </div>
        </header>
    );
}

export default Header;