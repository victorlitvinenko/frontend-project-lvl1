import readlineSync from 'readline-sync';

export const ROUNDS = 3;
const WELCOME_TEXT = 'Welcome to the Brain Games!';

export const showWelcomeText = () => console.log(WELCOME_TEXT);
export const showRules = (text) => console.log(`${text}\n`);
export const congratulate = (name) => console.log(`Congratulations, ${name}!`);

export const meetAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const askQuestion = (name, question, correct) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (answer === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  return false;
};
