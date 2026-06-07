const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const operatorSymbols = Object.keys(operators)

export const description = 'What is the result of the expression?'

export const generateRound = () => {
  const a = getRandomInt(1, 50)
  const b = getRandomInt(1, 50)
  const operator = operatorSymbols[getRandomInt(0, operatorSymbols.length - 1)]

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(operators[operator](a, b))

  return [question, correctAnswer]
}
