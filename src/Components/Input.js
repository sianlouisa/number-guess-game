import React from 'react';
const Input = props => {
  const { getInput, correct, guess } = props;
  return (
    <input
      type="number"
      placeholder="Enter your guess here"
      onChange={getInput}
      disabled={correct}
      value={guess}
    />
  );
};

export default Input;
