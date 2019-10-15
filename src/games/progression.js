import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

export const maxFirstElement = 20;
export const amount = 10;
export const maxStep = 5;
export const minStep = 2;
const description = 'What number is missing in the progression?';
const getQuestionAndCorrectAnswer = () => {
  const firstElement = random(1, maxFirstElement);
  const hiddenElementPosition = random(0, amount - 1);
  const step = random(minStep, maxStep);
  const correctAnswer = firstElement + hiddenElementPosition * step;
  let question = '';
  for (let i = 0; i < amount; i += 1) {
    if (i === hiddenElementPosition) {
      question = `${question}.. `;
    } else {
      question = `${question}${i * step + firstElement} `;
    }
  }
  return cons(question.trim(), String(correctAnswer));
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
