#!/usr/bin/env node
import { gameQuestion, getAnswerTheQuestion } from '../src/games/cal_games_logic.js';
import gameStart from '../src/index.js';
// iport gameStart from '../src/games/cal_games_logic.js';
gameStart(gameQuestion, getAnswerTheQuestion);
