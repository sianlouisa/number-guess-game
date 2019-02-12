import React from 'react';

const Clue = props => {
  const { answer, guess } = props;
  const higher = Math.max(answer, +guess);
  return (
    <>
      {+guess === higher ? (
        <p>You guessed {guess}.. too high!</p>
      ) : (
        <p>You guessed {guess}... too low!</p>
      )}
    </>
  );
};

export default Clue;
