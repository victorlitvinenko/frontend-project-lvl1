import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const GCD_MAX = 100;
const rules = 'Find the greatest common divisor of given numbers.';
const logics = () => {
  const nod = (a, b) => (!b ? a : nod(b, a % b));
  const num1 = random(1, GCD_MAX);
  const num2 = random(1, GCD_MAX);
  return cons(`${num1} ${num2}`, String(nod(num1, num2)));
};

export default () => playGame(rules, logics);
