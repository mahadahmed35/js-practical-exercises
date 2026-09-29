let numbers = [1,2,2,2,3,3,4,4,5,6,6,7]
// function checkDublicate(numbers){
//     let result = []
//     for(let i =0; i<numbers.length; i++){
//         result.includes(numbers[i])? result : result.push(numbers[i]);
        
//     }
//     return result;
// }

// console.log(checkDublicate(numbers));
function checkDublicate(numbers){
    let result = [];
    for(let i=0; i<numbers.length; i++){
        let found = false;
        for(let j=0; j<result.length; j++){
            if(numbers[i] === result[j]){
                found = true;
                break;
            }
        }
        if(!found){
            result.push(numbers[i])
        }
    }
    return result;
}
console.log(checkDublicate(numbers))