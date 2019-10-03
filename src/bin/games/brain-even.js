#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { EVEN_MAX } from '../../constants';
import playGame from '../..';

playGame('Answer "yes" if the number is even, otherwise answer "no".',
  () => {
    const question = Math.floor(Math.random() * EVEN_MAX) + 1;
    const correct = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, correct);
  });
