
function calculate(operator) {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a === "" || b === "") {
        document.getElementById("result").innerText =
            "Please enter both numbers";
        return;
    }

    a = Number(a);
    b = Number(b);

    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}
