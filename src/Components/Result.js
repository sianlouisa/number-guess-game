import React from 'react';
import PlayAgain from './PlayAgain';

const Result = props => {
  const { resetGame } = props;
  return (
    <>
      <PlayAgain resetGame={resetGame} />
    </>
  );
};

export default Result;
