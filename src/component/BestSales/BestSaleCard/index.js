import styles from './BestSaleCard.module.scss'
import React from "react";
import AppContext from "../../../context";

function BestSaleCard(
    {
        id,
        title,
        price,
        imageByte,
        shortDescription,
        description,
        count

    }
) {
    const {onAddToLocalCart} = React.useContext(AppContext);
    const obj = { id, title, shortDescription, description, imageByte, price, count };
    const onClickPlus = () => {
        onAddToLocalCart(obj)
    }
    return(
        <div className={styles.bestSaleCard} onClick={onClickPlus}>
            <img width={90} height={90} src={`data:image/jpeg;base64,${imageByte}`} alt="Пицца"/>
            <div className={styles.bestSaleInfo}>
                <p className={styles.bestSaleTitle}>{title}</p>
                <p className={styles.bestSalePrice}>{price} ₽</p>
            </div>
        </div>
    );
}

export default BestSaleCard;