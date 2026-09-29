// Object transformation changing objects key or value.
const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
function transformKeys(inputObject, transformFunction){
    let result = {};
    for(let key in inputObject){
        let newKey = transformFunction(key);
        result[newKey]= inputObject[key];
    }
    return result;
}

const transformFunction = (key) => key.toLowerCase();
const transformedObject = transformKeys(inputObject, transformFunction);
console.log(transformedObject);
