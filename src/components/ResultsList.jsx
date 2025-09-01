import React from "react";
import Result from "./Result";
import styles from "../styles/ResultsList.module.css";


function ResultsList({resultsList}) {
    let newList = resultsList;
    if (!resultsList.length){
        return <h1>No results</h1>
    } else if (resultsList.length > 9){
        newList = resultsList.slice(0, 9)
    }

    return (
        <div className={styles.resultsList}>
            {newList.map((result) => (
                <Result key={`${result.gameID}`} result={result} />
            ))}
        </div>
    )
}

export default ResultsList