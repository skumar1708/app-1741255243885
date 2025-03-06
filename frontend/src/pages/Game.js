import React, { useState } from 'react';
import Board from '../components/Board';
import GameStatus from '../components/GameStatus';
import ResetButton from '../components/ResetButton';
import DarkModeToggle from '../components/DarkModeToggle';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = isXNext ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXNext(!isXNext);
    const winner = calculateWinner(boardCopy);
    if (winner) {
      setWinner(winner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderSquare = (i) => {
    return <button className="square" onClick={() => handleClick(i)}>
      {board[i]}
    </button>;
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className={`game${isDarkMode ? ' dark-mode' : ''}`}>
      <div className="game-board">
        <Board squares={board} onClick={handleClick} />
      </div>
      <GameStatus winner={winner} isXNext={isXNext} />
      <ResetButton onClick={resetGame} />
      <DarkModeToggle isDarkMode={isDarkMode} onClick={toggleDarkMode} />
    </div>
  );
};

export default Game;