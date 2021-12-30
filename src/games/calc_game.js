import generateRandomNumber from '../fnRandomNumber.js';
import gameStart from '../index.js';

const calculation = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRoundData = () => {
  const num1 = generateRandomNumber(1, 30);
  const num2 = generateRandomNumber(1, 30);
  const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = String(calculation(num1, randomOperator, num2));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  gameStart(gameRules, getRoundData);
};

export default startCalcGame;
