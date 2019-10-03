import { cons } from '@hexlet/pairs';
import playGame from '..';

export default () => {
  playGame('What is the result of the expression?',
    () => {
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
      return cons(question, correct);
    });
};
