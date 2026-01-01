
const user = {
    username: "atul",
    price : 999,

    Message : function () {
        console.log(`${this.username}, welcome to website .`);
        console.log(this);
        
    }
}

// user.Message();
// user.username = "sam";
// user.Message();

// console.log(this);



// ----------------- arrow function ----------() => {} ----------------------------



const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(4,5));


//  ----------------  implicit return -------------------------

const addThree = (num1,num2,num3) => (num1+num2+num3)

console.log(addThree(4,5,1));

const addThre = (num1,num2,num3) => ({username : "atul"})

