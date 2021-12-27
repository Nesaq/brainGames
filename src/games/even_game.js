import gameStart from '../index.js';
import generateRandomNumber from '../fnRandomNumber.js';

const isEvenNumber = (num) => num % 2 === 0;

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenRoundsGenerator = () => {
  const randomNum = generateRandomNumber(1, 100);
  const questionForUser = randomNum;
  const correctAnswer = isEvenNumber(randomNum) ? 'yes' : 'no';

  return [questionForUser, correctAnswer];
};

const startEvenGame = () => {
  gameStart(gameQuestion, evenRoundsGenerator);
};

export default startEvenGame;
