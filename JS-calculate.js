function calculate(val1, val2, operater){
switch(operater){
    case "+" :
        result = val1 + val2;
        break;
    case "-" :
        result = val1 -val2;
        break;
    case "*" :
        result = val1 * val2;
        break;
    case "/" :
        result = val1/val2;
        break;
        default :
        console.log("Invalid operater");
}
console.log(result);
}
calculate(3,4,"+");