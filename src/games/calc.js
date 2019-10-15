import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const max = 25;
const operations = '+-*';
const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, max);
  const num2 = random(1, max);
  const operationIndex = random(0, operations.length - 1);
  const question = `${num1} ${operations.substr(operationIndex, 1)} ${num2}`;
  let correctAnswer;
  switch (operations[operationIndex]) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      return false;
  }
  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
