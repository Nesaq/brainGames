import gameStart from '../index.js';
import generateRandomNumber from '../fnRandomNumber.js';

const isEvenNumber = (num) => num % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenRoundsGenerator = () => {
  const randomNum = generateRandomNumber(1, 100);
  const question = String(randomNum);
  const correctAnswer = isEvenNumber(randomNum) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  gameStart(gameRules, evenRoundsGenerator);
};

export default startEvenGame;
