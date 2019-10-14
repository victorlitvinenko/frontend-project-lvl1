import { cons } from '@hexlet/pairs';
import random from '../libs/random';
import playGame from '..';

const maxNumber = 25;
const operations = '+-*';
const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, maxNumber);
  const num2 = random(1, maxNumber);
  const operationIndex = random(0, operations.length - 1);
  const question = `${num1} ${operations.substr(operationIndex, 1)} ${num2}`;
  let correctAnswer;
  switch (operationIndex) {
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
