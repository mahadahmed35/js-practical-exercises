// let myNumber = 0;
// if (myNumber = 10) {
// 	console.log('Hacked!')
// }
// console.log(myNumber)

// Function which can except alot of arguments and return last argument uppercases.
function combineNames(...names){
    if(names.length === 1){
         return names[0];
    }
        return  names.slice(0, -1).concat(names[names.length -1].toUpperCase()).join(" ")
    
}
 console.log(combineNames("David"))
 console.log(combineNames("David", "Abdi"))
 console.log(combineNames("David", "Abdi", "Omer"))
 console.log(combineNames("David", "Abdi", "Omer", "Kader"))