#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameQuestion, gameGcd } from '../src/games/gcd_games_logic.js';

gameStart(gameQuestion, gameGcd);
// import gcdGame from '../src/games/gcd_games_logic.js';

// gcdGame();
