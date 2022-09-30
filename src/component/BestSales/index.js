import styles from './BestSales.module.scss'
import BestSaleCard from "./BestSaleCard";
import React from "react";
import AppContext from "../../context";

function BestSales() {
    const {bestSalesItem} = React.useContext(AppContext);
    return (
        <div className={styles.bestSaleWrapper}>
            <div className={styles.bestSaleTitleWrapper}>
                <h2>Часто заказывают</h2>
            </div>
            <div className={styles.bestSaleCardContent}>
                {bestSalesItem.map((item) => (
                    <BestSaleCard key={item.id}
                          {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default BestSales;