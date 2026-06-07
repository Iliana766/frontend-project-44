#!/usr/bin/env node

import { runGame } from '../src/cli.js'
import { description, generateRound } from '../src/games/gcd.js'

runGame(description, generateRound)
