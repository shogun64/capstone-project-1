import React, { useState } from "react";
import styles from "../styles/IDBar.module.css";

function IDBar({id, setID}) {
  return (
    <div className={styles.idbar}>
        <input
        type="text" placeholder="Game ID" value={id} onChange={(e) => setID(e.target.value)}/>
    </div>
  )
}

export default IDBar