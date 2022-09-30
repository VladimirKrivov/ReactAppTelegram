import style from "./CardDop.module.scss"

function CardDop() {
    return(
        <div className={style.dopItem}>
            <img width={75} height={75} src="/img/icon/sousy.png" alt="Соусы"/>
            <h3>Соусы</h3>
        </div>
    );
}

export default CardDop;