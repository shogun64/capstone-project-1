import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/Game.module.css";

function Game() {
    const { gameID } = useParams();
    const { data, loading, error } = useFetchData(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
    if (loading) return <p className="loading">Loading game Data...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className={styles.game}>
            <h1>{data.info.title}</h1>
            <img src={data.info.thumb}></img>
            <p>Game ID: {gameID}</p>
            <p>Cheapest known price: ${data.cheapestPriceEver.price}</p>
        </div>
    )
}

export default Game