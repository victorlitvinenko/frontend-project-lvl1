import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { ROUNDS, WELCOME_TEXT } from './constants';

const showWelcomeText = () => console.log(WELCOME_TEXT);
const showRules = (text) => console.log(`${text}\n`);
const showCongratulation = (name) => console.log(`Congratulations, ${name}!`);

const meetAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

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
  showWelcomeText();
  showRules(rules);
  const name = meetAndGreet();
  for (let i = 0; i < ROUNDS; i += 1) {
    const data = logics();
    if (!askQuestion(name, car(data), cdr(data))) return false;
  }
  showCongratulation(name);
  return true;
};
