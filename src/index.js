import readlineSync from 'readline-sync';

const gameRounds = 3;

const gameStart = (gameRules, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
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
