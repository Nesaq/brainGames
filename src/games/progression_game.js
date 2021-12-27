import generateRandomNumber from '../fnRandomNumber.js';
import gameStart from '../index.js';

const getProgression = (start, stepOfProgression, progressionLength) => {
  const progressionArr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArr.push(start + stepOfProgression * i);
  }
  return progressionArr;
};

const gameQuestion = 'What number is missing in the progression?';

const progressionGame = () => {
  const start = generateRandomNumber(0, 0);
  const stepOfProgression = generateRandomNumber(2, 8);
  const progressionLength = generateRandomNumber(5, 10);
  const progression = getProgression(start, stepOfProgression, progressionLength);
  const index = generateRandomNumber(2, progressionLength - 1);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const questionForUser = progression.join(' ');

  return [questionForUser, correctAnswer];
};

const startProgressionGame = () => {
  gameStart(gameQuestion, progressionGame);
};

export default startProgressionGame;
