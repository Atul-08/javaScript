let myDate  = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2026,0,26,10,8);
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("01-26-2004");
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))