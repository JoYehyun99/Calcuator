const nums = document.querySelectorAll(".btn_num");
const op = document.querySelectorAll(".btn_op");

const ac = document.getElementById("AC");
const del = document.getElementById("del");

const prev = document.getElementById("previous_output");
const curr = document.getElementById("current_output");

let num1 = "";
let num2 = "";
let operator;


function calculate(operator, num1, num2){
    switch(operator){
        case "+" :
             return num1 + num2;

        case "÷" :
            return num1 / num2;
             
        case "-" :
            return num1 - num2;

        case "×" :
            return num1 * num2;  
    }
}

function printNum(e){
    curr.innerHTML += e.target.innerHTML;
}

function setOperator(e){

    if(e.target.id == "equal"){ // click '=' btn
        if(curr.innerText == "" || operator == null){
            return;
        }
        num2 = curr.innerHTML;
        prev.innerHTML = `${num1}${operator}${num2}`;
        curr.innerHTML= calculate(operator,parseFloat(num1),parseFloat(num2));
        num1 = curr.innerHTML;
        operator = null;
    }
    else{ //click operator btn
        if(operator != null){
            if(curr.innerText != "" && prev.innerText != ""){
                let result;
                num2 = curr.innerText;
                curr.innerText ="";
                result = calculate(operator,parseFloat(num1),parseFloat(num2));
                operator = e.target.innerHTML;
                prev.innerText = `${result} ${operator}`;
                num1 = result;
            }
            return;
        }
        else if(curr.innerText == ""){
            return;
        }
        else{
            operator = e.target.innerHTML;
            num1 = curr.innerHTML;
            prev.innerHTML = `${num1} ${operator}`;
            curr.innerHTML ="";
        }
    }
}

function allClear(){
    num1 = "";
    num2 = "";
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
    return;
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
