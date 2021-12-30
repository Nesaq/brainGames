import generateRandomNumber from '../fnRandomNumber.js';
import gameStart from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const num = generateRandomNumber(1, 50);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startIsPrime = () => {
  gameStart(gameRules, gamePrime);
};

export default startIsPrime;
