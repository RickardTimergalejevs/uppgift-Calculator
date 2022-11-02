const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const numberTextOne = document.getElementById("textOne").value;
    const numberTextTwo = document.getElementById("textTwo").value;
    const sign = document.getElementById("solution").value;

    switch (sign) {
        case '+':
            result = numberTextOne + numberTextTwo;
            break;

        case '-':
            result = numberTextOne - numberTextTwo;
            break;

        case '*':
            result = numberTextOne * numberTextTwo;
            break;

        case '/':
            result = numberTextOne / numberTextTwo;
            break;
    
        default:
            break;
    }
    document.getElementById("text").innerHTML = result;
})