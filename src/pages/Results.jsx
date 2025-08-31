import { useState, useEffect } from 'react'
import SearchBar from "../components/SearchBar";

function Results() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let gameID = 31540

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://www.cheapshark.com/api/1.0/games?title=batman`
            );
            const data = await response.json();
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='results'>
            <SearchBar/>
        </div>
    )
}

export default Results