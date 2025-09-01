import React from "react";
import styles from "../styles/Result.module.css";

function Result({result}) {
  return (
    <div className={styles.result}>
      <h2>{result.external}</h2>
    </div>
  )
}

export default Result