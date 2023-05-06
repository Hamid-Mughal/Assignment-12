// 6. Write a js program to count total number of even and odd elements in an array.
let arr=[14,27,38,47,33,38]
let totalEvenNum=[];
let totalOddNum=[];
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2==0) {
        totalEvenNum.push(arr[index])
    }
    else{
        totalOddNum.push(arr[index])
    }
    
}
console.log(`${totalEvenNum.length}  are even numbers`);
console.log(`${totalOddNum.length}  are odd numbers`);
