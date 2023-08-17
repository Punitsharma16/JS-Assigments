function getNumbersGreaterThan5(arr){
    let NumIs = arr.filter((number)=>{
        return number > 5;
    })
    return NumIs;
}
let result = getNumbersGreaterThan5([1,2,3,9,10,7,5,4,3]);
console.log(result);