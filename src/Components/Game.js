import React, { Component } from 'react';
import Input from './Input';
import GuessBtn from './GuessBtn';
import ResetBtn from './ResetBtn';
import GameText from './GameText';
import PlayAgain from './PlayAgain';
import Clue from './Clue';

class Game extends Component {
  state = {
    guess: '',
    answer: 0,
    hasGuessed: false,
    isCorrect: false,
  };

  render() {
    const { isCorrect, hasGuessed, guess, answer } = this.state;
    return (
      <div>
        <GameText
          isCorrect={isCorrect}
          resetGame={this.resetGame}
          hasGuessed={hasGuessed}
          guess={guess}
          answer={answer}
        />
        {!isCorrect ? (
          <>
            <Input
              getInput={this.getInput}
              isCorrect={isCorrect}
              guess={guess}
            />
            <GuessBtn submitGuess={this.submitGuess} isCorrect={isCorrect} />
            <ResetBtn resetGame={this.resetGame} />
          </>
        ) : (
          <PlayAgain resetGame={this.resetGame} />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ answer: this.randomNumberGenerator() });
  }

  resetGame = () => {
    this.setState({
      guess: '',
      answer: this.randomNumberGenerator(),
      hasGuessed: false,
      isCorrect: false,
    });
  };

  randomNumberGenerator = () => {
    return Math.floor(Math.random() * (10 - 1) + 1);
  };

  getInput = e => {
    const guess = e.target.value;
    this.setState({ guess, hasGuessed: false });
  };

  submitGuess = e => {
    e.preventDefault();
    const { guess, answer } = this.state;
    +guess === answer
      ? this.setState({ hasGuessed: true, isCorrect: true })
      : this.setState({ hasGuessed: true });
  };
}

export default Game;
