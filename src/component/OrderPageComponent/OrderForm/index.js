import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Input} from "../../Form/Input";
import React from "react";
import AppContext from "../../../context";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function OrderForm() {
    const {localCart, allPrice, allCount, setLocalCart} = React.useContext(AppContext);
    const [buttonState, setButtonState] = React.useState(false);
    const [orderStatus, setOrderStatus] = React.useState(true);
    const navigate = useNavigate();

    const {register, handleSubmit, reset, resetField, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        let localCartId = localCart.map(item => item.id);
        let orderDto = {
            ...data,
            products: localCart,
            allPrice: allPrice
        }
        console.log(orderDto);
        let testDto = {
            ...data,
            productsId: localCartId,
            allPrice: allPrice
        }

        fetchOrder(orderDto);
    }


    async function fetchOrder(testDto) {
        setOrderStatus(false);
        try {
            await axios.post('http://192.168.100.5:8080/order/create-order', testDto).then(r => {
                if (r) {
                    navigate("/cart/order/finish");
                    setLocalCart([]);
                }
            });
            setOrderStatus(true)

        } catch (error) {
            alert('На сайте ведутся технические работы, попробуйте позже');
            console.error(error);
            setOrderStatus(false);
        }
    }


    const [deliveryChange, setDeliveryChange] = React.useState('delivery')


    const onChangeDelivery = (event, value) => {
        if (value === "delivery") {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
        setDeliveryChange(value);
        resetField("city");
        resetField("street");
        resetField("house");
    }

    const dev = () => {
        if (deliveryChange === "delivery") {
            return (
                <>
                    <Input
                        {...register("city")}
                        id="city"
                        type="text"
                        label="Город"
                        name="city"

                    />
                    <Input
                        {...register("street")}
                        id="street"
                        type="text"
                        label="Улица"
                        name="street"

                    />
                    <Input
                        {...register("house")}
                        id="house"
                        type="text"
                        label="Номер дома"
                        name="house"

                    />
                </>
            )
        }
    }
    return (
        <>
            {/*Формы*/}
            <div className="formInput">
                <h1>Оформление заказа</h1>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <FormControl fullWidth>
                        {/*<FormLabel id="demo-radio-buttons-group-label">Выбирите способ доставки</FormLabel>*/}
                        <RadioGroup

                            aria-labelledby="demo-radio-buttons-group-label"
                            value={deliveryChange}
                            name="delivery-group"
                            onChange={onChangeDelivery}
                        >
                            <div className="radioButtonWrapper">
                                <FormControlLabel value="delivery"
                                                  id="delivery"
                                                  control={<Radio {...register("delivery")} className="radioBtn"/>}
                                                  label="Доставка"
                                                  className={'radioBtnLabel ' + (buttonState ? ' ' : 'btnActive')}/>
                                <FormControlLabel value="order"
                                                  id="order"
                                                  control={<Radio {...register("delivery")} className="radioBtn"/>}
                                                  label="Самовывоз"
                                                  className={'radioBtnLabel ' + (buttonState ? 'btnActive' : ' ')}/>
                            </div>

                        </RadioGroup>
                    </FormControl>

                    <div className="inputGroup">
                        <Input
                            {...register("firstName")}
                            id="firstName"
                            type="text"
                            label="Имя"
                            name="firstName"
                        />
                        <Input
                            {...register("phoneNumber")}
                            id="phoneNumber"
                            type="tel"
                            label="Номер телефона"
                            name="phoneNumber"
                        />


                        {dev()}

                        <Input
                            {...register("person")}
                            id="person"
                            type="text"
                            label="Количество персон"
                            name="person"
                        />
                        <Input
                            {...register("other")}
                            id="other"
                            type="text"
                            label="Пожелания к заказу"
                            name="other"
                            multiline
                            rows={4}
                        />

                    </div>


                    <div className="orderCompleteButtonWrapper">
                        <div className="totalInfo">
                            <p>Сумма заказа</p>
                            <ul>
                                <li>{allPrice.toLocaleString()} ₽</li>
                            </ul>
                        </div>

                        <button
                            className="buttonOrder"
                            disabled={!orderStatus}
                        >

                            Оформить заказ
                        </button>


                    </div>


                </form>

            </div>
        </>
    )
}

export default OrderForm;