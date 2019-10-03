#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import {
  EXPRESSION_MAX_NUMBER, OPERATIONS_AMOUNT, IS_OPERATION_ADD, IS_OPERATION_SUB,
} from '../../constants';
import playGame from '../..';

playGame('What is the result of the expression?',
  () => {
    const num1 = Math.floor(Math.random() * EXPRESSION_MAX_NUMBER) + 1;
    const num2 = Math.floor(Math.random() * EXPRESSION_MAX_NUMBER) + 1;
    const operation = Math.floor(Math.random() * OPERATIONS_AMOUNT) + 1;
    let question;
    let correct;
    if (operation === IS_OPERATION_ADD) {
      question = `${num1} + ${num2}`;
      correct = String(num1 + num2);
    } else if (operation === IS_OPERATION_SUB) {
      question = `${num1} - ${num2}`;
      correct = String(num1 - num2);
    } else {
      question = `${num1} * ${num2}`;
      correct = String(num1 * num2);
    }
    return cons(question, correct);
  });
