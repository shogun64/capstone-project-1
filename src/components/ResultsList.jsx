import React from "react";
import Result from "./Result";
import styles from "../styles/ResultsList.module.css";


function ResultsList({resultsList}) {
  return (
    <div className={styles.resultslist}>
        {resultsList.map((result) => (
            <Result key={`${result.gameID}`} result={result} />
        ))}
    </div>
  )
}

export default ResultsList