import React from "react";
import Squares from "./square";

const Board = () => {
    return <div style={{
        margin: 10,
        padding:20
    }} className="board">
    Board
    <div className="board-row">
    <Squares /> <Squares /> <Squares />
    </div>
    <div className="board-row">
    <Squares /> <Squares /> <Squares />
    </div>
    <div className="board-row">
    <Squares /> <Squares /> <Squares />
    </div>
    
    </div>
}

export default Board;