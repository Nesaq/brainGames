import { generateRandomNumber } from '../index.js';

const getProgression = (itemOfPr, numbersOfPr) => {
  const massiveForProgression = [];
  massiveForProgression.push(itemOfPr);

  for (let i = 0; i < 9; i += 1) {
    massiveForProgression.push(massiveForProgression[i] + numbersOfPr);
  }
  return massiveForProgression;
};

const gameQuestion = 'What number is missing in the progression?';

const progressionGame = () => {
  const itemOfPr = generateRandomNumber(0, 0);
  const numbersOfPr = generateRandomNumber(5, 15);
  const progression = getProgression(itemOfPr, numbersOfPr);
  const index = generateRandomNumber(2, 8);
  const correctAnswer = progression[index];
  progression[index] = '..';
  const questionForUser = progression.join(' ');

  return [questionForUser, correctAnswer];
};
export { gameQuestion, progressionGame };
