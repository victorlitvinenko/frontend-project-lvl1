import readlineSync from 'readline-sync';

export const ROUNDS = 3;
export const WELCOME_TEXT = 'Welcome to the Brain Games!';
export const EVEN_RULES = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export const showWelcomeText = () => console.log(WELCOME_TEXT);
export const showEvenRules = () => console.log(EVEN_RULES);

export const meetAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askEven = (name) => {
  const number = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  return false;
};

export const playEvenGame = () => {
  const name = meetAndGreet();
  for (let i = 1; i <= ROUNDS; i += 1) {
    if (!askEven(name)) return;
  }
  console.log(`Congratulations, ${name}!`);
};
