function reverseString(str){
    let splitedStr = str.split("");
    let reverseStr = splitedStr.reverse();
    let joinedStr = reverseStr.join("");
    console.log(joinedStr);
}
reverseString('hello');