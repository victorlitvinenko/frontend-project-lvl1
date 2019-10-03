import {
  showWelcomeText, showRules, meetAndGreet, askQuestion, congratulate, ROUNDS,
} from '..';

export default () => {
  showWelcomeText();
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
  const name = meetAndGreet();
  for (let i = 1; i <= ROUNDS; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    const correct = question % 2 === 0 ? 'yes' : 'no';

    if (!askQuestion(name, question, correct)) {
      return false;
    }
  }
  congratulate(name);
  return true;
};
