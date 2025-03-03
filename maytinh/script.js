function appendNumber(number) {
    const resultInput = document.getElementById("result");
    if (resultInput.value === "0" && number === "0") {
        return; // Prevent multiple leading zeros
    }
    if (resultInput.value === "0" && number !== ".") {
        resultInput.value = number; //replace 0
    } else {  
        resultInput.value += number;
    }
}

function appendOperator(operator) {
    const resultInput = document.getElementById("result");
    const lastChar = resultInput.value.slice(-1);
    if (resultInput.value === "" && operator === "-") {
        resultInput.value += operator; // Allow starting with negative
    } else if ("+-*/".includes(lastChar)) {
        resultInput.value = resultInput.value.slice(0, -1) + operator; //replace operator
    } else {
        resultInput.value += operator;
    }
}
function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        if (result == undefined) {
            document.getElementById("result").value = "";
        } else {
            document.getElementById("result").value = result;
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, result.length - 1);
}

// ===== Bonus JS Features =====

// 1. Square Root
function squareRoot() {
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value);

    if (!isNaN(currentValue) && currentValue >= 0) {
        resultInput.value = Math.sqrt(currentValue);
    } else {
        resultInput.value = "Error"; // Error for negative numbers or NaN
    }
}
//2. Percentage
function percentage() {
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value);
    if(!isNaN(currentValue)){
        resultInput.value= currentValue/100;
    }else {
        resultInput.value = "Error";
    }

}

// 3. Invert Sign (+/-)
function invertSign() {
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value);

    if (!isNaN(currentValue)) {
        resultInput.value = -currentValue;
    } else {
        resultInput.value = "Error";
    }
}
