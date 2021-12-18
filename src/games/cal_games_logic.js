import { generateRandomNumber } from '../index.js';

const calculation = (num1, operators, num2) => {
  switch (operators) {
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

const getAnswerTheQuestion = () => {
  const operators = ['+', '-', '*'];

  const num1 = generateRandomNumber(30, 1);
  const num2 = generateRandomNumber(30, 1);
  const randomOperator = operators[generateRandomNumber(0, 2)];
  const questionForUser = `${num1} ${randomOperator} ${num2}`;
  // console.log(questionForUser);
  const correctAnswer = String(calculation(num1, num2, randomOperator)); // проблема тут.
  return [questionForUser, correctAnswer];
};

export { gameQuestion, getAnswerTheQuestion };
