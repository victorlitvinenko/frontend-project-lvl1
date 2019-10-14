import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const maxNumber = 100;
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, maxNumber);
  const num2 = random(1, maxNumber);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
