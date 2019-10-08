import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '../engine';

const PRIME_MAX = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndCorrectAnswer = () => {
  const isPrime = (num) => {
    if (num < 2) return false;
    let count = 0;
    for (let i = 1; i <= num / 2; i += 1) {
      if (num % i === 0) count += i;
    }
    return count === num;
  };
  const question = random(1, PRIME_MAX);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
