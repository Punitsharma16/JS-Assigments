function highPerformence(arr){
    let highScore = arr.map((student)=>{
        let sum = student.scores.reduce((val1,val2)=>{
            return val1+val2;
        })
        let avg = sum/student.scores.length;
        return {name:student.name, average: avg};
    }).filter((student)=>{
         return student.average > 90;
    })
    return highScore;
}
const res = [{ name: "Ram", scores: [80, 95, 60] },{ name: "Mohan", scores: [85, 70, 90] },{ name: "Sai", scores: [60, 70, 80] },{ name: "Hemang", scores: [95, 90, 94] },];
console.log(res); 