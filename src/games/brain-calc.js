import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const EXPRESSION_MAX_NUMBER = 25;
const OPERATIONS_AMOUNT = 3;
const operations = '+-*';
const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, EXPRESSION_MAX_NUMBER);
  const num2 = random(1, EXPRESSION_MAX_NUMBER);
  const operation = random(0, OPERATIONS_AMOUNT - 1);
  const question = `${num1} ${operations.substr(operation, 1)} ${num2}`;
  let correctAnswer;
  switch (operation) {
    case 0:
      correctAnswer = num1 + num2;
      break;
    case 1:
      correctAnswer = num1 - num2;
      break;
    case 2:
      correctAnswer = num1 * num2;
      break;
    default:
      return false;
  }
  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
