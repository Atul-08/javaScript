// immediatly invoked function expression ----- IIFE

(function foo(){
    console.log("DB connected");
    
})();

( (name) => {
    console.log(`DB connected ${name }`);
    
})("atul")
