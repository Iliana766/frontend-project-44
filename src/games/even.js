const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100)
  const question = String(number)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default generateQuestionAndAnswer
