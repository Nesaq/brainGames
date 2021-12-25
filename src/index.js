import readlineSync from 'readline-sync';

const gameStart = (gameQuestion, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const [questionForUser, correctAnswer] = rounds();
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
