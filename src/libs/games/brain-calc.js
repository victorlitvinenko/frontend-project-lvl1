import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

export const EXPRESSION_MAX_NUMBER = 25;
export const OPERATIONS_AMOUNT = 3;
export const IS_OPERATION_ADD = 1;
export const IS_OPERATION_SUB = 2;
export const IS_OPERATION_MULT = 3;
const rules = 'What is the result of the expression?';
const logics = () => {
  const num1 = random(1, EXPRESSION_MAX_NUMBER);
  const num2 = random(1, EXPRESSION_MAX_NUMBER);
  const operation = random(1, OPERATIONS_AMOUNT);
  let question;
  let correct;
  switch (operation) {
    case IS_OPERATION_ADD:
      question = `${num1} + ${num2}`;
      correct = String(num1 + num2);
      break;
    case IS_OPERATION_SUB:
      question = `${num1} - ${num2}`;
      correct = String(num1 - num2);
      break;
    case IS_OPERATION_MULT:
      question = `${num1} * ${num2}`;
      correct = String(num1 * num2);
      break;
    default:
      question = `${num1} * ${num2}`;
      correct = String(num1 * num2);
  }
  return cons(question, correct);
};

export default () => playGame(rules, logics);
