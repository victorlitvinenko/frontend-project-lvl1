import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '../engine';

const EXPRESSION_MAX_NUMBER = 25;
const OPERATIONS_AMOUNT = 3;
const IS_OPERATION_ADD = 0;
const IS_OPERATION_SUB = 1;
const IS_OPERATION_MULT = 2;
const operations = '+-*';
const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, EXPRESSION_MAX_NUMBER);
  const num2 = random(1, EXPRESSION_MAX_NUMBER);
  const operation = random(0, OPERATIONS_AMOUNT);

  const question = `${num1} ${operations.substr(operation, 1)} ${num2}`;
  let correctAnswer;
  switch (operation) {
    case IS_OPERATION_ADD:
      correctAnswer = String(num1 + num2);
      break;
    case IS_OPERATION_SUB:
      correctAnswer = String(num1 - num2);
      break;
    case IS_OPERATION_MULT:
      correctAnswer = String(num1 * num2);
      break;
    default:
      correctAnswer = String(num1 * num2);
  }
  return cons(question, correctAnswer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
