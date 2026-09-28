const user = {
    name: "Mahad",
    age: null,
    email: undefined,
    score: 90
};

function convertNullableValues(user){
for(let key in user){
 if(user[key] === null){
    user[key] = 0;
 } else if(user[key] === undefined){
    user[key ]= "";
 }
 
}
return user
}

console.log(convertNullableValues(user))
