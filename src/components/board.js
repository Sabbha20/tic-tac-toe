import React, {useState} from "react";
import Squares from "./square";
import resetImg from "./imgs/reset.png"


const Board = () => {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    const status = winner ? 
    `Player ${winner} wins!` :
    `Next Player: ${xIsNext ? "X" : "O"}`

    const handleClickEvent = (i) => {
        

        //Make a copy of initial state
        const newSquares = [...squares];

        if (winner || newSquares[i]) {
            return;
        }

        //Mutate the copy at i-th position
        newSquares[i] = xIsNext ? "X" : "O";
        //setState to new state
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const resetGame = () => {
        setSquares(initialSquares);
        setXIsNext(true);
    }

    const renderSquare = (i) =>{
        return (
            <Squares 
            value={squares[i]}
            onClickEvent={()=>handleClickEvent(i)} />
        );
    }

    return <div className="board">
    <div>{status}
    <button onClick={resetGame} className="resetBtn">
    <img alt="reset" src={resetImg} width="30" height="30" />
    </button>
    </div>
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

function calculateWinner(squares){
    const lines = [
        [0,1,2], [3,4,5], [6,7,8], //rows
        [0,3,6], [1,4,7], [2,5,8], //columns
        [0,4,8], [2,4,6], //diagonals
    ];

    for(let line of lines){
        const [a,b,c] = line;
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;