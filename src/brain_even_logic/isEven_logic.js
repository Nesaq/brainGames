import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = generateRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      if ((number % 2) === 0) {
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again,${name}`);
        return;
      }
    }
    if (answer === 'no') {
      if ((number % 2) !== 0) {
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again,${name}`);
        return;
      }
    } else if (answer !== 'yes' && answer !== 'no') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again,${name}`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
export default startGame;
