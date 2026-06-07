const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Создаёт арифметическую прогрессию заданной длины
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

export const description = 'What number is missing in the progression?'

export const generateRound = () => {
  // Длина прогрессии: от 5 до 10
  const length = getRandomInt(5, 10)

  // Начальное число и шаг прогрессии (шаг не должен быть 0)
  const start = getRandomInt(-50, 50)
  let step = getRandomInt(-10, 10)
  while (step === 0) {
    step = getRandomInt(-10, 10)
  }

  const progression = generateProgression(start, step, length)

  // Выбираем случайную позицию, где будет пропуск
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  // Формируем вопрос: заменяем одно число на ".."
  const questionParts = progression.map((num, index) =>
    index === hiddenIndex ? '..' : String(num),
  )

  const question = questionParts.join(' ')

  return [question, correctAnswer]
}
