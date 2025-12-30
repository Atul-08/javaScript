function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("U");
    console.log("L");
    
}

// sayMyName();

function addTwoNumbers(number1 , number2){
    return number1+number2;
}

// console.log(`result : `,addTwoNumbers(3,4));


function userLoggedIn(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `;

}

// console.log(userLoggedIn());
// console.log(userLoggedIn("Atul"));


function calculateCartPrice(val1, val2, ...num1){     // rest operator
    return num1;   
}

// console.log(calculateCartPrice(200,300,400,500));


const user = {
    username : "Atul",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} .`);
    
}

// handleObject(user);
// handleObject({
//     username : "sam",
//     price : 300
// })


const arr = [20,30,40,50]

function handleArray(anyArr){
    return anyArr[1];
}
// console.log(`second element is ${handleArray(arr)}`);
