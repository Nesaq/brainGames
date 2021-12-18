import readlineSync from 'readline-sync';

export const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameStart = (gameQuestion, dataRounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  for (let i = 0; i < 3; i += 1) {
    const [questionForUser, correctAnswer] = dataRounds();
    console.log(`Question: ${questionForUser}`);
    const playerAnswer = readlineSync.question('Your Answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameStart;
