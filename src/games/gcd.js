const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  // Алгоритм Евклида
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const description = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)

  const question = `${a} ${b}`
  const correctAnswer = String(gcd(a, b))

  return [question, correctAnswer]
}
