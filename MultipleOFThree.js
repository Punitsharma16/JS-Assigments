function multipleOfThree(Start, End){
    for(let i=Start; i<=End; i++){
        if(i % 3 === 0){
            console.log(i);
        }
    }
}
multipleOfThree(3,13);