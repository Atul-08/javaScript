const name  = "atul"
const repoCount = 4

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('atul kumar')

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8,6)
console.log(anotherString)


const newStringOne = "    atul    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://miniature%20goggles-764r5gqvqr9f497.github.dev/"

console.log(url.replace('%20','-'))

console.log(url.includes('atul'))