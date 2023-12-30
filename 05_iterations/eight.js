const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc : ${acc}, curVal: ${curVal}`);
//     return acc+curVal;
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'jsCourse',
        price: 2999
    },
    {
        itemName: 'cppCourse',
        price: 1999
    },
    {
        itemName: 'htmlCourse',
        price: 999
    },
    {
        itemName: 'dataScienceCourse',
        price: 4999
    }
]
const totalBill = shoppingCart.reduce((acc, item) => acc+item.price, 0);
console.log(totalBill);