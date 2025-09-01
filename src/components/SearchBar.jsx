import React, {useState} from "react";
import styles from "../styles/SearchBar.module.css";


function SearchBar({search, setSearch}) {
  return (
    <div className={styles.searchbar}>
        <input
        type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar