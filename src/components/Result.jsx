import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Result.module.css";

function Result({result}) {
  return (
    <div className={styles.result}>
      <h2><Link to={`/game/${result.gameID}`}>{result.external}</Link></h2>
      <img src={result.thumb}></img>
      <p>Game ID: {result.gameID}</p>
    </div>
  )
}

export default Result