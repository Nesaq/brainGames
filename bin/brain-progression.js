#!/usr/bin/env node
import gameStart from "../src/index.js";
import { gameQuestion, progressionGame } from "../src/games/brain_progression_logic.js";

gameStart(gameQuestion, progressionGame);
