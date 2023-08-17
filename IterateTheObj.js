function solve(obj){
    for(let val in obj){
        console.log(obj[val]);
    }

    for(let properties in obj){
        console.log(`${properties}: ${obj[properties]}`);
    }
}
const obj = {"name": "John","age": "32","location": "New York"}
solve(obj);
