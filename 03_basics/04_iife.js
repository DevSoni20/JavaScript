// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    // named IIFE
    console.log(`DB Connnected`);
})();
// chai();

( (name) =>{
    console.log(`DB connected 2 ${name}`);
})('Dev')