import { cons } from '@hexlet/pairs';
import playGame from '..';

export default () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".',
    () => {
      const isPerfect = (num) => {
        if (num < 6) return false;
        let count = 0;
        for (let i = 1; i < num; i += 1) {
          if (num % i === 0) count += i;
        }
        return count === num;
      };
      const question = Math.floor(Math.random() * 1000) + 1;
      const correct = isPerfect(question) ? 'yes' : 'no';
      return cons(question, correct);
    });
};
