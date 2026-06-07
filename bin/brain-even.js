#!/usr/bin/env node

import { runGame } from '../src/cli-even.js'
import evenGameLogic from '../src/games/even.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

runGame(description, evenGameLogic)
