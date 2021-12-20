#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameQuestion, gcdGame } from '../src/games/gcd_games_logic.js';

gameStart(gameQuestion, gcdGame);
// import gcdGame from '../src/games/gcd_games_logic.js';

// gcdGame();
