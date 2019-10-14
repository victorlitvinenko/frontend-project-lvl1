import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const maxNumber = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getQuestionAndCorrectAnswer = () => {
  const question = random(1, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
