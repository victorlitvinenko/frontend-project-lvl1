import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const maxNumber = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = random(1, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
