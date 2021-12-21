#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameQuestion, gamePrime } from '../src/games/brain_prime_logic.js';

gameStart(gameQuestion, gamePrime);
