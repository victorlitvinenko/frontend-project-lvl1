import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '../engine';

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

const GCD_MAX = 100;
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, GCD_MAX);
  const num2 = random(1, GCD_MAX);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);