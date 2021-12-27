import generateRandomNumber from '../fnRandomNumber.js';
import gameStart from '../index.js';

const getProgression = (start, stepOfProgression, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + stepOfProgression * i);
  }
  return progression;
};

const gameQuestion = 'What number is missing in the progression?';

const progressionGame = () => {
  const start = generateRandomNumber(0, 0);
  const stepOfProgression = generateRandomNumber(5, 15);
  const progressionLength = generateRandomNumber(4, 11);
  const progression = getProgression(start, stepOfProgression, progressionLength);
  const index = generateRandomNumber(2, 8);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const questionForUser = progression.join(' ');

  return [questionForUser, correctAnswer];
};

const startProgressionGame = () => {
  gameStart(gameQuestion, progressionGame);
};

export default startProgressionGame;
