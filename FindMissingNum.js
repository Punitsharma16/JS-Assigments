function findNum(arr, upperBound, lowerBound) {
    const expectedSum = ((upperBound + lowerBound) * (upperBound - lowerBound + 1)) / 2;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    const missingNum = expectedSum - sum;
    console.log(missingNum);
  }
  findNum([1, 4, 3] ,4, 1);