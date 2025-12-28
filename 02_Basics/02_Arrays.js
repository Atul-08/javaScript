let marvelHeros = ["ironman", "thor", "loki"]

let dcHeros = ["batman", "flash", "deadpool"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


// spread operator


const allHeros = [...marvelHeros,  ...dcHeros]
console.log(allHeros);


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatArr = anotherArr.flat(Infinity)
console.log(flatArr)


// converting to array

console.log(Array.isArray("atul"))
console.log(Array.from("atul"))
console.log(Array.from({name : 'atul'}))      // intersting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))