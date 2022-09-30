import Header from "../component/HomeComponent/Header";
import Card from "../component/HomeComponent/Card";
import React from "react";
import AppContext from "../context";
import Footer from "../component/HomeComponent/Footer";

function Home() {
    const {items, pageName} = React.useContext(AppContext);
    return (
        <div className="wrapper clear">
            <Header/>
            <div className="content">
                <h1>{pageName === '' ? "Все продукты" : pageName}</h1>
                {items.map((item) => (
                    <Card key={item.id}
                          {...item}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;