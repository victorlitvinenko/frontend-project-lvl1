import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

export const PROGRESSION_START_RANGE = 20;
export const PROGRESSION_AMOUNT = 10;
export const PROGRESSION_MAX_STEP = 5;
export const PROGRESSION_MIN_STEP = 2;
const rules = 'What number is missing in the progression?';
const logics = () => {
  const firstElement = random(1, PROGRESSION_START_RANGE);
  const hiddenElement = random(0, PROGRESSION_AMOUNT);
  const step = random(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  let result = '';
  let correct;
  for (let i = 0; i < PROGRESSION_AMOUNT; i += 1) {
    if (i === hiddenElement) {
      correct = firstElement + i * step;
      result += '.. ';
    } else {
      result += `${i * step + firstElement} `;
    }
  }
  return cons(result, String(correct));
};

export default () => playGame(rules, logics);
