function oddSquares(num){
  return num.filter(num=> num%2 !==0).map(num=> num ** 2)
}

// console.log(oddSquares([1, 2, 3, 4, 5, 6]));
console.log(oddSquares([10, 15, 20, 25, 30]));