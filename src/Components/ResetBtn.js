import React from 'react';

const ResetBtn = props => {
  const { resetGame } = props;
  return (
    <button type="button" onClick={resetGame}>
      Reset
    </button>
  );
};

export default ResetBtn;
