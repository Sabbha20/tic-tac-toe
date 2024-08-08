import React from "react";
import Squares from "./square";

const Board = () => {

    const renderSquare = (i) =>{
        return <Squares />;
    }

    return <div className="board">
    Board
    <hr />
    <div className="board-row">
    {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
    </div>
    <div className="board-row">
    {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
    </div>
    <div className="board-row">
    {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
    </div>
    
    </div>
}

export default Board;