import React from 'react';

const GameStatus = ({ winner, isXNext }) => {
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return <div className="status">{status}</div>;
};

export default GameStatus;