// map array method with out using map.
// function myMap(originalArray, callbackFn){
//     let result = [];
//     for(let i=0; i < originalArray.length; i++){
//         result.push(callbackFn(originalArray[i]));
//     }
//     return result;
// }

// console.log(myMap([22], x => x * 4));

//filter array method with out using filter.
// function myFilter(originalArray, callbackFn){
//     let result = [];
//     for(let i=0; i< originalArray.length; i++){
//    if(callbackFn(originalArray[i])){
//     result.push(originalArray[i]);
//    }
//     }
// return result;
// }

// console.log(myFilter([1,2,3,4], x=> x > 3));

//reduce without using reduce array method.

// function myReduce(originalArray, callbackFn, initialValue){
// for(let i =0; i<originalArray.length; i++){
//     initialValue = callbackFn(initialValue, originalArray[i]);
    
// }
// return initialValue;
// }
// console.log(
//     myReduce([1,2,3,44], (total, number)=> total + number, 0)
// );

// forEach without using forEach array method.
function myForEach( originalArray, callbackFn){
    for(let i=0; i<originalArray.length; i++){
   callbackFn(originalArray[i])
    }
    
}

myForEach([1,2,3,4,5,6,7], x =>{
console.log(x)
})