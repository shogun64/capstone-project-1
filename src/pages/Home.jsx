import React, { useState } from "react";
import { Link } from "react-router-dom";
import IDBar from "../components/IDBar";

function Home() {
    const [id, setID] = useState("")

    return (
        <div>
            <h1>Hello! Welcome to the CheapShark game lookup!</h1>
            <p>Here, using the CheapShark API, you can look up details 
                about the various deals offered for games.</p>
            <p>Either use the search function on the left, or, if you already know the ID
                of the game you're looking for, enter it on the right to be taken directly
                to the page for the game in question.</p>
            <button>
                <Link to={`search`}>Search for games</Link>
            </button>
            <IDBar id={id} setID={setID}/>
            <button>
                <Link to={`game/${id}`}>Game lookup</Link>
            </button>
        </div>
    )
}

export default Home