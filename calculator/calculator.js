let result = document.getElementById("result")

function appendNumber(Number){
    result.value+=Number;
}

function appendOperator(Operator){
    result.value+=Operator;
}

function clearResult(){
    result.value =" ";
}

function calculate () {
    try {
        result.value = eval(result.value);
    } catch (error){
        result.value= "Syntax Error!";
    }
}

const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () => {
    themeBtn.classList.toggle("theme");
    if (themeBtn.classList.contains("theme")){
        document.body.classList.add("changeTheme");
    } else {
        document.body.classList.remove("changeTheme");
    }
}