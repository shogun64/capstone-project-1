import React from "react";
import useFetchData from "../hooks/useFetchData";

function Store({storeID}) {
    const { data, loading, error } = useFetchData(`https://www.cheapshark.com/api/1.0/stores`);
    if (loading) return <p className="loading">Loading game Data...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div>
            <p>Store with deal: {data[storeID - 1].storeName}</p>
        </div>
    )
}

export default Store