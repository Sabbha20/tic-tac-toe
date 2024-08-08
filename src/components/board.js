import React, {useState} from "react";
import Squares from "./square";

const Board = () => {
    const initialSquares = [
        null, null, null,
        null, null, null,
        null, null, null,
    ];
    const [squares, setSquares] = useState(initialSquares);
    const handleClickEvent = (i) => {
        // alert(`box ${i} is clicked!`)
        //Make a copy of initial state
        const newSquares = [...squares];
        //Mutate the copy at i-th position
        newSquares[i] = "X";
        //setState to new state
        setSquares(newSquares);
    }

    const renderSquare = (i) =>{
        return (
            <Squares 
            value={squares[i]}
            onClickEvent={()=>handleClickEvent(i)} />
        );
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