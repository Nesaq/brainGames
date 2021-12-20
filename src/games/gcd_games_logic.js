import { generateRandomNumber } from '../index.js';
// eslint-disable-next-line import/no-unresolved
import gameStart from '../src/index.js';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};
const gameQuestion = 'Find the greatest common divisor of given numbers.';

const gameOfthrones = () => {
  const num1 = generateRandomNumber(1, 60);
  const num2 = generateRandomNumber(1, 60);
  const questionForUser = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return (questionForUser, correctAnswer);
};
const gcdGame = () => {
  gameStart(gameQuestion, gameOfthrones);
};

export default gcdGame;
