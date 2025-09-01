import React, { useState } from "react";

function IDBar({id, setID}) {
  return (
    <div>
        <input
        type="text" placeholder="Game ID" value={id} onChange={(e) => setID(e.target.value)}/>
    </div>
  )
}

export default IDBar