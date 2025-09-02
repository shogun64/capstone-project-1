import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Store from "../components/Store";
import styles from "../styles/Game.module.css";

function Game() {
    const { gameID } = useParams();
    const { data, loading, error } = useFetchData(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
    if (loading) return <p className={styles.loading}>Loading game Data...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;
    let cheapestPrice = data.deals[0].price;
    let storeID = data.deals[0].storeID;

    for (const deal of data.deals){
        if (deal.price < cheapestPrice){
            cheapestPrice = deal.price;
            storeID = deal.storeID;
        }
    }

    return (
        <div className={styles.game}>
            <h1>{data.info.title}</h1>
            <img src={data.info.thumb}></img>
            <p>Game ID: {gameID}</p>
            <p>Retail price: {data.deals[0].retailPrice}</p>
            <p>Cheapest price ever: ${data.cheapestPriceEver.price}</p>
            <p>Cheapest price currently: ${cheapestPrice}</p>
            <Store storeID={storeID}/>
        </div>
    )
}

export default Game