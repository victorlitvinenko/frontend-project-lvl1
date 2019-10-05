#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { WELCOME_TEXT } from '../libs/settings';

console.log(WELCOME_TEXT);
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\n`);
