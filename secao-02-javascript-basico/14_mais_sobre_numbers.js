let num1 = 10.25
let num2 = 25

num1 += num2
num1 += num2

console.log(num1)

console.log(num1.toString() + num2)
console.log(num1.toFixed(2))
console.log(Number.isInteger(num1))
console.log(typeof num1)

let temp = num1 * 'OLA'
console.log(Number.isNaN(temp))
