function arrayStats(array){
    let sum = array.reduce((a,b)=> a + b);
    let average = sum / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
 return {
    sum : sum,
    average: Number(average.toFixed(2)),
    min: min,
    max : max,

}
}

console.log(arrayStats([1,2,3,4,5]))