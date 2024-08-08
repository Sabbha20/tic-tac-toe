import React from "react";
import Board from "./components/board"


const gameStyle = {
    backgroundColor: "salmon",
    margin: 10,
    padding: 20
}

const Game = () => {
    return (
        <div style={gameStyle}>
            Game
            <Board />
        </div>
    );
}
export default Game;