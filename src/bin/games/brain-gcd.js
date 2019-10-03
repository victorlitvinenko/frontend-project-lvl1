#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { GCD_MAX } from '../../constants';
import playGame from '../..';

playGame('Find the greatest common divisor of given numbers.',
  () => {
    const nod = (a, b) => (!b ? a : nod(b, a % b));
    const num1 = Math.floor(Math.random() * GCD_MAX) + 1;
    const num2 = Math.floor(Math.random() * GCD_MAX) + 1;
    return cons(`${num1} ${num2}`, String(nod(num1, num2)));
  });
