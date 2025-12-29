// singleton
// object.create

// object literals

const sym = Symbol("key1")

const jsUser = {
    name : "atul",
    "full name" : "atul kumar",         // cant be used with .
    age  : 21,
    [sym] : "myKey1",
    email : "atulmzn01@gmail.com",
    isLoggedIn : false

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[sym]);


// freeze()

jsUser.email = "atul123@gmail.com";
// console.log(jsUser);

// Object.freeze(jsUser);
jsUser.email = "atul123@microsoft.com";
// console.log(jsUser);


// method

jsUser.greeting =  function(){
    console.log("hello");
}
console.log(jsUser.greeting());


jsUser.greetingTwo =  function(){
    console.log(`hello ${this.name}`); 
}
console.log(jsUser.greetingTwo());

