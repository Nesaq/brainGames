import generateRandomNumber from '../fnRandomNumber.js';
import gameStart from '../index.js';

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

const gameGcd = () => {
  const num1 = generateRandomNumber(40, 1);
  const num2 = generateRandomNumber(40, 1);
  const questionForUser = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return [questionForUser, correctAnswer];
};

const startGcdGame = () => {
  gameStart(gameQuestion, gameGcd);
};

export default startGcdGame;
