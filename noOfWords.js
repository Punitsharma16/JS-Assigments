function numOfWords(str){
    let splitedStr = str.split(" ");
    return splitedStr.length;
}
let res = numOfWords('Hello I am a developer');
console.log(res);