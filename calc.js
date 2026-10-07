const display = document.querySelector("#display");
const number = document.querySelectorAll(".number");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
let firstNumber;
let operator;
for( let i = 0; i < number.length; i++) {

    number[i].addEventListener("click", function() {

       display.value = display.value + number[i].textContent;

    });
}
add.addEventListener("click", function(){
firstNumber=Number(display.value);
operator = "+";
display.value = " ";
});
subtract.addEventListener("click",function(){
firstNumber=Number(display.value);
operator = "-";
display.value = " ";
});
divide.addEventListener("click",function(){
firstNumber=Number(display.value);
operator = "/";
display.value = " ";
});
multiply.addEventListener("click",function(){
firstNumber=Number(display.value);
operator = "*";
display.value = " ";
});
equal.addEventListener("click" , function(){
let secondNumber = Number(display.value);
let result;
if(operator === "+"){
result = firstNumber + secondNumber;
display.value = result;
}
if(operator === "-"){
result = firstNumber - secondNumber;
display.value = result;
}
if(operator === "*"){
result = firstNumber * secondNumber;
display.value = result;
}
if(operator === "/"){
result = firstNumber / secondNumber;
display.value = result;
}
});
