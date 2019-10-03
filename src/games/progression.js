import { cons } from '@hexlet/pairs';
import playGame from '..';

export default () => {
  playGame('What number is missing in the progression?',
    () => {
      const START_RANGE = 20;
      const AMOUNT = 10;
      const MAX_STEP = 5;
      const MIN_STEP = 2;
      const firstElement = Math.floor(Math.random() * START_RANGE) + 1;
      const hiddenElement = Math.floor(Math.random() * AMOUNT);
      const step = Math.floor(Math.random() * MAX_STEP) + MIN_STEP;
      let result = '';
      let correct;
      for (let i = 0; i < 10; i += 1) {
        if (i === hiddenElement) {
          correct = firstElement + i * step;
          result += '.. ';
        } else {
          result += `${i * step + firstElement} `;
        }
      }
      return cons(result, String(correct));
    });
};
