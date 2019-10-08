import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '../engine';

export const PROGRESSION_START_RANGE = 20;
export const PROGRESSION_AMOUNT = 10;
export const PROGRESSION_MAX_STEP = 5;
export const PROGRESSION_MIN_STEP = 2;
const description = 'What number is missing in the progression?';
const getQuestionAndCorrectAnswer = () => {
  const firstElementPosition = random(1, PROGRESSION_START_RANGE);
  const hiddenElementPosition = random(0, PROGRESSION_AMOUNT);
  const step = random(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  let result = '';
  let correctAnswer;
  for (let i = 0; i < PROGRESSION_AMOUNT; i += 1) {
    if (i === hiddenElementPosition) {
      correctAnswer = firstElementPosition + i * step;
      result = `${result}.. `;
    } else {
      result = `${result}${i * step + firstElementPosition} `;
    }
  }
  return cons(result, String(correctAnswer));
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
