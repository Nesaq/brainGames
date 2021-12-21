import { generateRandomNumber } from "../index.js";

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const num = generateRandomNumber(10, 40);
  const questionForUser = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [questionForUser, correctAnswer];
};
export { gameQuestion, gamePrime };
