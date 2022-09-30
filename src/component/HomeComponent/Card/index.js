import styles from './Card.module.scss'
import React from "react";
import AppContext from "../../../context";


function Card(
    {
        id,
        title,
        imageByte,
        description,
        price,
        count,
        shortDescription
    }
) {
    const {onAddToLocalCart} = React.useContext(AppContext);
    const obj = { id, title, shortDescription, description, imageByte, price, count };

    const onClickPlus = () => {
        onAddToLocalCart(obj)
    }

    return (
        <div className={styles.card} onClick={onClickPlus}>
            <img width={130} height={130} src={`data:image/jpeg;base64,${imageByte}`} alt="Пицца"/>
            <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <button className={styles.cardButton}>{price} ₽</button>
            </div>
        </div>
    );
}

export default Card;