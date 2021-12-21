import { generateRandomNumber } from '../index.js';

const getProgression = (itemOfPr, passes) => {
  const massiveForProgression = [];
  massiveForProgression.push(itemOfPr);
  for (let i = 0; i < 9; i += 1) {
    massiveForProgression.push(massiveForProgression[i] + passes);
  }
  return massiveForProgression;
};

const gameQuestion = 'What number is missing in the progression?';

const progressionGame = () => {
  const itemOfPr = generateRandomNumber(1, 10);
  const passes = generateRandomNumber(1, 10);
  const progression = getProgression(itemOfPr, passes);
  const index = generateRandomNumber(0, 10);
  const correctAnswer = progression[index];
  progression[index] = '...';
  const questionForUser = progression.join(' ');
  return [questionForUser, correctAnswer];
};
export { gameQuestion, progressionGame };
