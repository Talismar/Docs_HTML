const questions = [
  "Ask 01",
  "Ask 02",
  "Ask 03",
  "Ask 04"
]

const ask = (index = 0) => {
  process.stdout.write(questions[index] + "\n\n")
}

ask()
// O on é um escutador de evento, esse alguma coisa
// que esta acontecendo é o (data)
// process.stdin.on("data", data => {
//   process.stdout.write(data.toString().trim() + "\n")
//   process.exit()
// })

const answers = [

]

process.stdin.on("data", data => {
  answers.push(data.toString().trim())

  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers);
    process.exit()
  }


})