function arrayProperties(arr1, arr2){
    let arr3 = arr2.concat(arr1);
    
    arr3.push(arr2);
    console.log(arr3);

    const popItem = arr3.pop();

    let reverseArr = arr3.reverse();
    console.log(reverseArr);

    let lastIndex = arr3.lastIndexOf("orange");
    console.log(lastIndex);

    let slicedArr = arr3.slice(0,3);
    console.log(slicedArr.length);

    let joinArr = arr3.join(',');
    console.log(joinArr);
}
 arrayProperties(["apple","orange","mango"],["pineapple","orange"]);