import {
  showWelcomeText, showRules, meetAndGreet, askQuestion, congratulate, ROUNDS,
} from '..';

export default () => {
  showWelcomeText();
  showRules('What is the result of the expression?');
  const name = meetAndGreet();
  for (let i = 1; i <= ROUNDS; i += 1) {
    const num1 = Math.floor(Math.random() * 25) + 1;
    const num2 = Math.floor(Math.random() * 25) + 1;
    const operation = Math.floor(Math.random() * 3) + 1;
    let question;
    let correct;
    if (operation === 1) {
      question = `${num1} + ${num2}`;
      correct = String(num1 + num2);
    } else if (operation === 2) {
      question = `${num1} - ${num2}`;
      correct = String(num1 - num2);
    } else {
      question = `${num1} * ${num2}`;
      correct = String(num1 * num2);
    }

    if (!askQuestion(name, question, correct)) {
      return false;
    }
  }
  congratulate(name);
  return true;
};
