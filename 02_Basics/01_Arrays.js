const arr = [1,3,5,23]
// console.log(arr[2])

const heros =["ironman", "thor", "hulk"]
// console.log(heros)

const arr2 = new Array(0,1,2,3,4)
console.log(arr2)

//arr Methods 

arr2.push(5)
// arr2.push(6)
// console.log(arr2)

arr2.pop()
// console.log(arr2)

arr2.unshift(-1)
// console.log(arr2)
arr2.shift()
// console.log(arr2)


// console.log(arr2.includes(3))
// console.log(arr2.includes(27))
// console.log(arr2.indexOf(2))

const newArr =  arr2.join()    // converts to string
// console.log(newArr)
// console.log(typeof newArr)


//    slice , splice

const arr3 = arr2.slice(1,3)
// console.log(arr3)
// console.log(arr2)

const arr4 = arr2.splice(1,3)
console.log(arr4)
console.log(arr2)

