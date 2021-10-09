const nums = document.querySelectorAll(".btn_num");
const op = document.querySelectorAll(".btn_op");
//const modi = document.querySelectorAll(".btn_modi");

const ac = document.getElementById("AC");
const del = document.getElementById("del");

const prev = document.getElementById("previous_output");
const curr = document.getElementById("current_output");

let num1;
let num2;
let operator;


function calculate(operator, num1, num2){

    let result;
    switch(operator){
        case "+" :
             result = num1 + num2;
             break;
        case "÷" :
             result = num1 / num2;
             break;
        case "-" :
             result = num1 - num2;
             break;
        case "×" :
             result = num1 * num2;
             break;
             
    }
    return result;
}

function printNum(e){

    if(operator != null){    
        curr.innerHTML += e.target.innerHTML;
    }
    else{
        curr.innerHTML += e.target.innerHTML;
    }
}

function setOperator(e){
    if(e.target.id == "equal"){
        if(curr.innerText == ""){
            num2 = num1;
        }else{
        num2 = curr.innerHTML;
        }
        prev.innerHTML = `${num1} ${operator} ${num2}`;
        curr.innerHTML= calculate(operator,parseFloat(num1),parseFloat(num2));
        num1 = curr.innerHTML;
        operator = null;
    }
    else{
        operator = e.target.innerHTML;
        num1 = curr.innerHTML;
        prev.innerHTML = `${num1} ${operator}`;
        curr.innerHTML ="";
    }
}

function allClear(){
    num1 = 0;
    num2= 0;
    operator = null;
    curr.innerHTML="";
    prev.innerHTML="";
}

function deleteNum(){
    curr.innerText= curr.innerText.slice(0,-1);
}

function checkPoint(){
    let check = curr.innerText.indexOf(".");
    if(check == -1){
        curr.innerHTML += ".";
    }
    else{
        return;
    }
}


for(let i=0; i<nums.length; i++){
    if(nums[i].id == "point"){
        nums[i].addEventListener("click",checkPoint);
    }
    else{
    nums[i].addEventListener("click",printNum);
    }
}

for(let i=0;i<op.length;i++){
    op[i].addEventListener("click",setOperator);
}

ac.addEventListener("click",allClear);
del.addEventListener("click", deleteNum);
