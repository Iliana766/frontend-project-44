import readlineSync from 'readline-sync'

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ')
  return name.trim()
}

const welcomeUser = (name) => {
  console.log(`Hello, ${name}!`)
}

const runGame = (description, gameLogic) => {
  console.log('Welcome to the Brain Games!')
  const userName = getUserName()
  welcomeUser(userName)
  console.log(description)

  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const { question, correctAnswer } = gameLogic()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export { runGame }
