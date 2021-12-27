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

const gameQuestion = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getAnswerTheQuestion = () => {
  const num1 = generateRandomNumber(1, 1);
  const num2 = generateRandomNumber(1, 1);
  const randomOperator = operators[generateRandomNumber(0, operators.length)];
  const questionForUser = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = String(calculation(num1, randomOperator, num2));

  return [questionForUser, correctAnswer];
};

const startCalcGame = () => {
  gameStart(gameQuestion, getAnswerTheQuestion);
};

export default startCalcGame;
