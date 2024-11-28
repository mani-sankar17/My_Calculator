// Accessing the buttons & input fields using js methods 

const screen = document.getElementById("display");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");  
const del = document.querySelector(".delete");
const form = document.querySelector("form");

// Capturing the button clicks for operators and operands and displaying them on the screen parallelly storing them in a variable

operands.forEach((val, ind) => {
    val.addEventListener("click", () => {
        screen.value += val.value;
    })
})
// Function to clear the screen when the ' C ' button is clicked 

clear.addEventListener("click", () => {
    screen.value = "";
})

// Invoking the Eval() function when ' = ' button is clicked, additionally added exception handling for better functioning 

equal.addEventListener("click", () => {
    calculate();
})

// Function to calculate the expression  
const calculate = () => {
    try {
        if(eval(screen.value) == Infinity) {
            screen.value = undefined;
        }
        screen.value = eval(screen.value);
    } catch(e) {
        console.warn(e);
        screen.value = "error";
    } 
    
}

// Deleting the numbers inside input field 
del.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
})

// Handling the keyboard inputs using CODE property
document.addEventListener("keydown", (e) => {
    if(e.code == "Digit0") {
        screen.value += 0;
    } else if(e.code == "Digit1") {
        screen.value += 1;
    }else if(e.code == "Digit2") {
        screen.value += 2;
    }else if(e.code == "Digit3") {
        screen.value += 3;
    }else if(e.code == "Digit4") {
        screen.value += 4;
    }else if(e.code == "Digit5") {
        screen.value += 5;
    }else if(e.code == "Digit6") {
        screen.value += 6;
    }else if(e.code == "Digit7") {
        screen.value += 7;
    }else if(e.code == "Digit8") {
        screen.value += 8;
    }else if(e.code == "Digit9") {
        screen.value += 9;
    }else if(e.code == "Backspace") {
        screen.value = screen.value.slice(0,-1);
    }else if(e.code == "Enter") {
        e.preventDefault();
        calculate();
    }else if(e.key == "+") {
        screen.value += "+";
    }else if(e.key == "-") {
        screen.value += "-";
    }else if(e.key == "/") {
        screen.value += "/";
    }else if(e.key == "*") {
        screen.value += "*";
    }
    
})

