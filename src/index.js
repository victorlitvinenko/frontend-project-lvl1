import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const ROUNDS_COUNT = 3;
const WELCOME_TEXT = 'Welcome to the Brain Games!';

export default (description, getQuestionAndCorrectAnswer) => {
  console.log(WELCOME_TEXT);
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const data = getQuestionAndCorrectAnswer();
    const question = car(data);
    const correctAnswer = cdr(data);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
