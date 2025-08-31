import React from "react";
import Result from "./Result";

function ResultsList({resultsList}) {
  return (
    <div>
        {resultsList.map((result) => (
            <Result key={`${result.gameID}`} result={result} />
        ))}
    </div>
  )
}

export default ResultsList