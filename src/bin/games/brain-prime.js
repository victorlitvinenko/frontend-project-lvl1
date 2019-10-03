#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { PRIME_MAX } from '../../constants';
import playGame from '../..';

playGame('Answer "yes" if given number is prime. Otherwise answer "no".',
  () => {
    const isPrime = (num) => {
      if (num < 6) return false;
      let count = 0;
      for (let i = 1; i < num; i += 1) {
        if (num % i === 0) count += i;
      }
      return count === num;
    };
    const question = Math.floor(Math.random() * PRIME_MAX) + 1;
    const correct = isPrime(question) ? 'yes' : 'no';
    return cons(question, correct);
  });
