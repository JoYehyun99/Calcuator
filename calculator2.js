const nums = document.querySelectorAll(".btn_num");
const op = document.querySelectorAll(".btn_op");
const equal = document.getElementById("equal");
const ac = document.getElementById("AC");
const del = document.getElementById("del");

const prev = document.getElementById("previous_output");
const curr = document.getElementById("current_output");

class Caculator {
    constructor(curr, prev){
        this.currOperand = curr;
        this.prevOperand = prev;
        this.operator = null;
    }

    delete(){
        this.currOperand = this.currOperand.slice(0,-1);
    }

    allClear(){
        this.currOperand = "0";
        this.prevOperand = "";
        this.operator = null;
    }

    setNum(num){
        if(num == "." && this.currOperand.includes(".")) return;

        if(this.currOperand == "0"){
            if(num == "."){
                this.currOperand = this.currOperand + num;
            }
            else{
                this.currOperand = num;
            }
        }
        else if(this.currOperand != '' && this.prevOperand != '' && this.operator == null){
            this.allClear();
            this.currOperand = num;
        }
        else{
        this.currOperand = this.currOperand + num;
        }
    }

    setOperator(operator){
        this.operator = operator;
        this.prevOperand = this.currOperand;
        this.currOperand = "";
    }

    cacluate(){
        const num1 = parseFloat(this.prevOperand);
        const num2 = parseFloat(this.currOperand);
        let result;

        switch(this.operator){
            case "+" :
                result= num1 + num2;
                break;
    
            case "÷" :
                result= num1 / num2;
                break;
                 
            case "-" :
                result= num1 - num2;
                break;
    
            case "×" :
                result = num1 * num2;
                break; 
            default:
                return; 
        }

        this.prevOperand = `${this.prevOperand} ${this.operator} ${this.currOperand}`;
        console.log(result);
        this.currOperand = result.toString();
        this.operator = null;
        
    }

    print(){
        if(this.operator != null){
            prev.innerHTML = `${this.prevOperand} ${this.operator}`;
            curr.innerText = this.currOperand;
        }
        else{
        curr.innerText = this.currOperand;
        prev.innerText = this.prevOperand;
        }
    }

}

const calc = new Caculator('0','');
calc.print();

nums.forEach(num => {
    num.addEventListener("click",() => {
        calc.setNum(num.innerText);
        calc.print();
    });
});

op.forEach(op => {
    op.addEventListener("click",() => {
        calc.setOperator(op.innerText);
        calc.print();
    });
});

equal.addEventListener("click",() => {
    calc.cacluate();
    calc.print();
});

del.addEventListener("click",() =>{
    calc.delete();
    calc.print();
});

ac.addEventListener("click",()=>{
    calc.allClear();
    calc.print();
});
