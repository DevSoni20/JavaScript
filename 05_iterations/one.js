// for
const array = [1,2,3,4,5,6];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

// for (let index = 0; index <= 1; index++) {
//     console.log(`Outer loop value ${index}`);
//     for(let i = 0 ; i <= 2 ; i++)
//     {
//         console.log(`Inner loop value ${i}`);
//     }
// }

let arr = ['flash', 'batman', 'superman'];
// for(let i = 0 ; i < arr.length ; i++)
// {
//     console.log(arr[i]);
// }

// break and continue

for(let i = 0 ; i < 10 ; i++)
{
    if(i === 5){break;}
    if(i == 3){continue;}
    console.log(`Value of i is : ${i}`);
}