
/*const student = {
    name : 'ram',
    age : 25,
    marks : 80,


console.log('name: ${student.name}', 'age: ${student.age}','marks : ${student.marks}');
const students = [
    {name: 'ram', age: 25, marks: 80},
    {name: 'mohan', age: 24, marks: 82},
    {name: 'radha', age: 23, marks: 85},
    {name: 'sita', age: 24, marks: 81},
]

// Print student data using for loop
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}:`)
    console.log(`Name: ${students[i].name}`);
    console.log(`Age: ${students[i].age}`);
    console.log(`Marks: ${students[i].marks}`)*/

    



const greet = function(name){
console.log("hello",name)}
greet('ram');

function calculator(a,b,operation){
     return operation(a,b)
}
function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num1-num2
}
function modulus(num1,num2){
    return num1 % num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    if(num2 != 0){
        return num1 / num2
    }
    else(console.log("division by zero not possible"))
}
console.log(calculator(3,5,add));
console.log(calculator(8,4,subtract));
console.log(calculator(10,3,modulus));
console.log(calculator(6,7,multiply));
console.log(calculator(20,0,divide));


function sayHello(){
    console.log("Hello world")
}
function callMe(fn){
    fn()
}
callMe(sayHello);



callMe(function(){
    console.log('hi')

})



const arr = [2,4,5,7,8]
function sum(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    console.log(total);
}
sum(arr);

function reverseArray(array){
    let reversed = [];
    for(let i = array.length - 1; i >= 0; i--){
        reversed.push(array[i]);
        
    }
    console.log(reversed);
}
reverseArray(arr);


let array = [2,4,5,6,7,8]
//for each
arr.forEach((el) => console.log(el));
// map
console.log(arr.map((el) =>el % 2 == 0));
console.log(arr.map((el) => el*el));
//filter
console.log(arr.filter((el) => el % 2 == 0));

//reduce
console.log(arr.reduce((sum,n) => sum+n, 0));
console.log(arr.reduce((product,n) => product*n,1));
console.log(arr.includes(8));
console.log(arr.includes(7));
console.log(arr.includes(11));
console.log(arr.reverse());







