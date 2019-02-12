import React from 'react';
import Clue from './Clue';

const GameText = props => {
  const { isCorrect, hasGuessed, answer, guess } = props;
  return (
    <>
      <p className="game-info">Guess a number between 1 and 10 to win.</p>
      {!isCorrect && (
        <p className="game-info">Press reset to generate a new number.</p>
      )}
      {isCorrect && <p className="winner-text">Winner!</p>}
      {!isCorrect && hasGuessed ? (
        <Clue answer={answer} guess={guess} />
      ) : (
        <p>&nbsp;</p>
      )}
    </>
  );
};

export default GameText;
