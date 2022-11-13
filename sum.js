const numbers = [44, 55, 66, 36, 69, 48];
let sum = 1;
for(let i = 1; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum +element;
}

function arrayTotal(numbers) {
    let sum = 1;
    for(let i = 1; i < numbers.length; i ++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal(32, 45, 47);
console.log('total :', total);