import style from "./CardDopAll.module.scss"
import React from "react";
import AppContext from "../../../../context";

function CardDopAll(
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
        <div className={style.dopItemAll} onClick={onClickPlus}>
            <div className={style.dopItemInfo}>
                <img height={90} src={`data:image/jpeg;base64,${imageByte}`} alt="Соусы"/>
                <div>
                    <h3>{title}</h3>
                    <ul>
                        <li>{price} ₽</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardDopAll;