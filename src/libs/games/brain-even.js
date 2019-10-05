import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const EVEN_MAX = 100;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const logics = () => {
  const question = random(1, EVEN_MAX);
  const correct = isEven(question) ? 'yes' : 'no';
  return cons(question, correct);
};

export default () => playGame(rules, logics);
