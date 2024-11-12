let display = document.querySelector(".display input");

let btn = document.querySelectorAll("button");

let menu_btn = document.querySelector(".menu-icon");

let history = document.querySelector(".history");

let historyLogs = document.querySelector(".history-logs");

let isClosed = true;

let enterBtn = document.querySelector(".enter");

let displayVal;
let displayRes;

let equationArr =[


]
document.addEventListener("keydown", function (event) {

    let key = event.key;

    keypressed(key);
})


function keypressed(key) {
    // Get the current value of the display
    let currentValue = display.getAttribute("value");

    switch (key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            // Append the pressed key to the current value
            currentValue += key;
            break;

        case "+":
        case "-":
        case "/":
        case "*":
        case ".":
            // Append the operator or dot to the current value
            currentValue += key;
            break;

        case "Enter":
            // Evaluate the expression when Enter is pressed
            currentValue = eval(currentValue);
            break;

        case "Backspace":
            // Remove the last character when Backspace is pressed
            currentValue = currentValue.slice(0, -1);
            break;

        case "Escape":
            // Clear the display when Escape is pressed
            currentValue = "";
            break;

        default:
            // Ignore other keys
            break;
    }

    // Update the display with the new value
    display.setAttribute("value", currentValue);

}


menu_btn.addEventListener("click",()=>{

    if(isClosed){

        history.style.right = "0px";
        menu_btn.style.color = "white";
        isClosed = false;
    }
    else{

        history.style.right = "-420px";
        menu_btn.style.color = "black";
        isClosed = true
    }

})

let tmp = setInterval(() => {

    displayVal = display.value;

}, 500);

enterBtn.addEventListener("click",()=>{

    let displayRes = display.value;

    displayHistory(displayRes);

    display.value = "";

});


function displayHistory(displayRes){

    let equation_sec = document.createElement("div");
    equation_sec.classList.add("equation-sec");

    let equation = document.createElement("p");
    equation.classList.add("equation");

    let equation_result = document.createElement("p");
    equation_result.classList.add("equation-result");


    equation.innerHTML = displayVal;
    equation_result.innerHTML = displayRes;

    equation_sec.appendChild(equation);
    equation_sec.appendChild(equation_result);


    equationArr.push(equation_sec);

    equationArr.forEach((val)=>{

        historyLogs.appendChild(val);

    })  
}

