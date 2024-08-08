import React from "react";
import Squares from "./square";

const Board = () => {
    return <div style={{
        backgroundColor: "skyblue",
        margin: 10,
        padding:20
    }}>
    Board
    <Squares />
    </div>
}

export default Board;