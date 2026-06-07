#!/usr/bin/env node

import { runGame } from '../src/cli.js'
import { description, generateRound } from '../src/games/prime.js'

runGame(description, generateRound)
