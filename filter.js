
const arr=[1,2,3,4,5,6,7,8,9];

//filtering

const resultOfEvenNumbers=arr.filter((item)=>{
    return item=item%2==0;

})
const resultOfOddNumbers=arr.filter((item)=>{
    return item=item%2!==0;

})

console.log(resultOfEvenNumbers);
console.log(resultOfOddNumbers);


