import React from 'react';

const GuessBtn = props => {
  const { submitGuess, correct } = props;
  return (
    <button type="button" onClick={submitGuess} disabled={correct}>
      Guess
    </button>
  );
};

export default GuessBtn;
