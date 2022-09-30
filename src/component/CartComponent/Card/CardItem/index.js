import style from "./CardItem.module.scss"
import React from "react";
import AppContext from "../../../../context";

function CardItem(
    {
        id,
        title,
        UrlImage,
        description,
        price,
        count,
        shortDescription,
        imageByte

    }
) {
    const {setLocalCart, localCart} = React.useContext(AppContext);
    const obj = {id, title, description, UrlImage, imageByte, price, count};
    //State Общей цены каждого товара
    const [allPriceInProduct, setAllPriceInProduct] = React.useState(0);

    //Удаление из корзины
    const onRemove = () => {
        onRemoveToLocalCart(id);
    };

    //Удаление элемента из корзины
    const onRemoveToLocalCart = () => {
        let a = localCart;
        for (let i = 0; i < a.length; i++){
            if (Number(a[i].id) === Number(id)){
                delete a[i];
            }
        }
        let newStorage = a.filter(function(val) { return val !== null; });
        setLocalCart(newStorage);
    }

    React.useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(localCart));
    }, [localCart]);

    React.useEffect(() => {
        // Общая цена каждого товара
        setAllPriceInProduct(Number(price) * Number(count));
    }, [localCart]);


    //Минус и плюс в корзине
    //Плюс в корзине
    const onPlusCountCartItem = () => {
        let storage = localCart;
        for (let i = 0; i < storage.length; i++) {
            if (storage[i].id === id) {
                storage[i].count++;
            }
        }
        let newStorage = storage.filter(function(val) { return val !== null; });
        setLocalCart(newStorage);
    }
    //Минус в корзине
    const onMinCountCartItem = () => {
        // let storage = JSON.parse(localStorage.getItem('localCart'));
        let storage = localCart;
        for (let i = 0; i < storage.length; i++) {
            if (storage[i].id === id) {
                if (storage[i].count > 0) {
                    storage[i].count--;
                }
                if (storage[i].count === 0) {
                    delete storage[i];
                }
            }
        }
        let newStorage = storage.filter(function(val) { return val !== null; });
        setLocalCart(newStorage);
    }


    return (
        <div className={style.cardInCard}>
            <div className={style.cardItemInfo}>
                <img className={style.closeItemCardItem} onClick={onRemoveToLocalCart} src="/img/icon/close-item.svg" alt="Close"/>
                <img width={70} height={70} src={`data:image/jpeg;base64,${imageByte}`} alt="Pizza"/>
                <div className={style.cardItemDesc}>
                    <h3>{title}</h3>
                    <p>{shortDescription}</p>
                </div>
            </div>
            <div className={style.cardItemTotal}>
                <ul>
                    <li>{allPriceInProduct.toLocaleString()} ₽</li>
                </ul>

                <div className={style.countWrapper}>
                    <button className={style.buttonMinus} onClick={onMinCountCartItem}>-</button>
                    <div>{count}</div>
                    <button className={style.buttonPlus} onClick={onPlusCountCartItem}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CardItem;