import { cons } from '@hexlet/pairs';
import playGame from '..';

export default () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".',
    () => {
      const question = Math.floor(Math.random() * 100) + 1;
      const correct = question % 2 === 0 ? 'yes' : 'no';
      return cons(question, correct);
    });
};
