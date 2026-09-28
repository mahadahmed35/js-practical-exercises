function myMap(originalArray, callbackFn){
    let result = [];
    for(let i=0; i < originalArray.length; i++){
        result.push(callbackFn(originalArray[i]));
    }
    return result;
}

console.log(myMap([22], x => x + 4))