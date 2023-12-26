// var c = 444;
let a = 200;
if(true)
{
    let a = 10;
    const b = 20;
    // console.log(`inner a value ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = 'Dev'
    function two(){
        const website = 'utube'
        console.log(userName);
    }
    // console.log(website);
    two();
}
// one();

if(true)
{
    const username = 'dev'
    if(username === 'dev')
    {
        const website = ' youtube'
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ===================== Interseting =================
function addOne(num)
{
    return num+1;
}
addOne(5);

const addTwo = function(num)
{
    return num+2;
}
addTwo(5);