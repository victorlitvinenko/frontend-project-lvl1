import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const PRIME_MAX = 1000;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const logics = () => {
  const isPrime = (num) => {
    if (num < 6) return false;
    let count = 0;
    for (let i = 1; i < num; i += 1) {
      if (num % i === 0) count += i;
    }
    return count === num;
  };
  const question = random(1, PRIME_MAX);
  const correct = isPrime(question) ? 'yes' : 'no';
  return cons(question, correct);
};

export default () => playGame(rules, logics);
