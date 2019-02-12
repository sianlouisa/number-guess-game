import React from 'react';

const PlayAgain = props => {
  const { resetGame } = props;
  return (
    <button type="button" onClick={resetGame}>
      Play Again
    </button>
  );
};

export default PlayAgain;
