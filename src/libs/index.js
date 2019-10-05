import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { ROUNDS, WELCOME_TEXT } from './settings';

const askQuestion = (name, question, correct) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (answer === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  return false;
};

export default (rules, logics) => {
  console.log(WELCOME_TEXT);
  console.log(`${rules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < ROUNDS; i += 1) {
    const data = logics();
    if (!askQuestion(name, car(data), cdr(data))) return false;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
