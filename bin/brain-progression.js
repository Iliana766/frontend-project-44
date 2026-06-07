#!/usr/bin/env node

import { runGame } from '../src/cli.js'
import { description, generateRound } from '../src/games/progression.js'

runGame(description, generateRound)
