import {Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

import React from "react";
import axios from 'axios';
import AppContext from './context';
import OrderPage from "./pages/OrderPage";
import FinishOrderPage from "./pages/FinishOrderPage";

function App() {
    //State Категорий
    const [category, setCategory] = React.useState([]);
    //State Доставки
    const [delivery, setDelivery] = React.useState([]);
    //Имя страницы исходя из категории
    const [pageName, setPageName] = React.useState('');
    //State Продуктов
    const [items, setItems] = React.useState([]);
    //State Дополнительных продуктов
    const [itemsDop, setItemsDop] = React.useState([]);
    //State Корзины
    const [localCart, setLocalCart] = React.useState([]);
    //State Общей Цены
    const [allPrice, setAllPrice] = React.useState(0);
    //State Общего количества
    const [allCount, setAllCount] = React.useState(0);
    //State Часто Заказывают
    const [bestSalesItem, setBestSalesItem] = React.useState([]);
    //State Допы
    const [dopItem, setDopItem] = React.useState([]);













    //Запрос на беккенд
    React.useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponse, categoryItem, dopItemResponse, deliveryResponse] = await Promise.all([
                    axios.get('http://192.168.100.5:8080/allproduct'),
                    axios.get('http://192.168.100.5:8080/allcategory'),
                    axios.get('http://192.168.100.5:8080/allotherproduct'),
                    axios.get('http://192.168.100.5:8080/get-delivery'),
                ]);
                setItems(itemsResponse.data);
                setCategory(categoryItem.data);
                setItemsDop(dopItemResponse.data);
                setDelivery(deliveryResponse.data)
            } catch (error) {
                alert('Ошибка при запросе данных');
                console.error(error);
            }
        }

        fetchData();
    }, []);

    //Добавление товара в стейт корзины и в локальное хранилище
    const onAddToLocalCart = (obj) => {
        console.log(obj);
        if (localCart.find(item => item.id === obj.id)) {
            let newStorage = localCart;
            let newItem = newStorage.find(item => item.id === obj.id);
            newItem.count++;
            setLocalCart((prev) => prev.filter((item) => item.id !== obj.id));
            setLocalCart(prev => [...prev, newItem]);
        } else {
            setLocalCart(prev => [...prev, obj]);
        }
    };

    //Клик по категории
    const clickOfCategory = (obj) => {
        setPageName(obj.title);
        setItems(obj.products);
    }



    // Вытаскивает объекты из локального хранилища и передаем стейту
    React.useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('localCart'));
        if (storage === null) {
            setLocalCart([])
        } else {
            setLocalCart(storage);
        }


    }, []);

    // Вытаскивает объекты доп элементов
    React.useEffect(() => {
        itemsDop.map((item) => (
            (item.id === 1 ? setBestSalesItem(item.products) : setDopItem(item.products))
        ));
    }, [itemsDop]);

    // Обновляем общее количество цены и количества товаров
    React.useEffect(() => {
        let priceProduct = 0;
        localCart.map((item) => (
            priceProduct = priceProduct + Number(item.price) * Number(item.count)
        ));
        setAllPrice(priceProduct);

        let countProduct = 0;
        localCart.map((item) => (
            countProduct = countProduct + Number(item.count)
        ));
        setAllCount(countProduct);

    }, [localCart]);

    // Обновляем локальное хранилище при обновлении стейта localCart
    React.useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(localCart));
    }, [localCart]);
    return (
        <AppContext.Provider
            value={{
                pageName,
                items,
                category,
                localCart,
                allPrice,
                allCount,
                setLocalCart,
                onAddToLocalCart,
                clickOfCategory,
                bestSalesItem,
                dopItem,
                delivery

            }}>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/cart/order" element={<OrderPage/>}/>
                <Route path="/cart/order/finish" element={<FinishOrderPage/>}/>
            </Routes>
        </AppContext.Provider>

    );
}

export default App;
