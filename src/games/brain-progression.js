import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

export const PROGRESSION_START_RANGE = 20;
export const PROGRESSION_AMOUNT = 10;
export const PROGRESSION_MAX_STEP = 5;
export const PROGRESSION_MIN_STEP = 2;
const description = 'What number is missing in the progression?';
const getQuestionAndCorrectAnswer = () => {
  const firstElement = random(1, PROGRESSION_START_RANGE);
  const hiddenElementPosition = random(0, PROGRESSION_AMOUNT - 1);
  const step = random(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const correctAnswer = firstElement + hiddenElementPosition * step;
  let result = '';
  for (let i = 0; i < PROGRESSION_AMOUNT; i += 1) {
    if (i === hiddenElementPosition) {
      result = `${result}.. `;
    } else {
      result = `${result}${i * step + firstElement} `;
    }
  }
  return cons(result, String(correctAnswer));
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
