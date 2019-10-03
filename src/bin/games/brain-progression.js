#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import {
  PROGRESSION_START_RANGE, PROGRESSION_AMOUNT, PROGRESSION_MAX_STEP, PROGRESSION_MIN_STEP,
} from '../../constants';
import playGame from '../..';

playGame('What number is missing in the progression?',
  () => {
    const firstElement = Math.floor(Math.random() * PROGRESSION_START_RANGE) + 1;
    const hiddenElement = Math.floor(Math.random() * PROGRESSION_AMOUNT);
    const step = Math.floor(Math.random() * PROGRESSION_MAX_STEP) + PROGRESSION_MIN_STEP;
    let result = '';
    let correct;
    for (let i = 0; i < PROGRESSION_AMOUNT; i += 1) {
      if (i === hiddenElement) {
        correct = firstElement + i * step;
        result += '.. ';
      } else {
        result += `${i * step + firstElement} `;
      }
    }
    return cons(result, String(correct));
  });
