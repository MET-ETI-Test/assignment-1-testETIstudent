const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function myFunction(value) {
  return value * value;
}

function main() {
  readline.question(`What's the number? `, num => {
    value = myFunction(num)
    console.log(value)
    readline.close()
  })
}

main()