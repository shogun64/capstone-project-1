import { useState } from 'react'
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/Results.module.css";

function Results() {
    const [search, setSearch] = useState("")

    const { data, loading, error } = useFetchData(`https://www.cheapshark.com/api/1.0/games?title=${search}`);
    if (loading) return <p className="loading">Loading results...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    const resultsList = data

    return (
        <div className={styles.results}>
            <SearchBar search={search} setSearch={setSearch}/>
            <ResultsList resultsList={resultsList}/>
        </div>
    )
}

export default Results