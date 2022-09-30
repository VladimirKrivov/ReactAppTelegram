import styles from './Menu.module.scss';
import React from "react";
import AppContext from "../../../context";

function Menu(
    {
        id,
        title,
        products
    }) {
    const {clickOfCategory} = React.useContext(AppContext);
    const obj = {id, title, products};

    const clickOne = () => {
        clickOfCategory(obj)
    }

    return (
        <>
            <p className={styles.menuP} onClick={clickOne}>{title}</p>
        </>

    );
}

export default Menu;