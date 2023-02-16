 

//Clears the input box
 function ac(){
    document.getElementById("output").textContent="";
 }
// Numbers
function one(value){
    var output=document.getElementById("output");
    output.innerHTML=value;
}
function two(){
    document.getElementById("output").textContent +="2";
}
function three(){
    document.getElementById("output").textContent +="3";
}
function four(){
    document.getElementById("output").textContent +="4";
}
function five(){
    document.getElementById("output").textContent +="5";
}
function six(){
    document.getElementById("output").textContent +="6";
}
function seven(){
    document.getElementById("output").textContent +="7";
}
function eight(){
    document.getElementById("output").textContent +="8";
}
function nine(){
    document.getElementById("output").textContent +="9";
}
function zero(){
    document.getElementById("output").textContent +="0";
}
// establishing operator vaeiable
var operator=''
//Opertors
function add(){
    num1=parseFloat(document.getElementById("output").textContent);
    operator="+";
    ac();//calling the AC function to clear at the end of each operator is called
}
function minus(){
    num1=parseFloat(document.getElementById("output").textContent);
    operator="-"
    ac();
}
function multiply(){
    num1=parseFloat(document.getElementById("output").textContent);
    operator="*"
    ac();
}
function divide(){
    num1=parseFloat(document.getElementById("output").textContent);
    operator="/"
    ac();
}



//equals
function equals(){
    var num2=parseInt(document.getElementById("output").textContent);
    var result=0;/*Since the ac function clears the output box after each opertor is
    pressed the num2 variable is just the number entered after the box is cleared*/

    if (operator=='+'){
        result=num1 + num2;

    }
    else if(operator=="-"){
            result=num2-num2;
        }
    
    else if(operator=="*"){
            result=num1*num2;
        }
    else if(operator=="/"){
            result=num1/num2;
    }

    document.getElementById("output").textContent=result.toString();/*This returns the 'result' to the output box 
    by using the toString() attribute */

}

