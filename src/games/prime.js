const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  // Проверяем делители до квадратного корня из числа
  const limit = Math.sqrt(num)
  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (num % divisor === 0) {
      return false
    }
  }
  return true
}

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomInt(2, 100) // Простые числа ищем начиная с 2
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}
