import React, { useState } from "react";
import { Link } from "react-router-dom";
import IDBar from "../components/IDBar";
import styles from "../styles/Home.module.css";

function Home() {
    const [id, setID] = useState("")

    return (
        <div className={styles.home}>
            <h1>Hello! Welcome to the CheapShark game lookup!</h1>
            <p>Here, using the CheapShark API, you can look up details 
                about the various deals offered for games.</p>
            <p>Either use the search function on the left, or, if you already know the ID
                of the game you're looking for, enter it on the right to be taken directly
                to the page for the game in question.</p>
            <div className={styles.homebuttons}>
                <button>
                    <Link to={`search`}>Search for games</Link>
                </button>
                <div className={styles.gamebuttons}>
                    <IDBar id={id} setID={setID}/>
                    <button>
                        <Link to={`game/${id}`}>Game lookup</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home