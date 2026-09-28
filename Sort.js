let products = [
    { name: "Phone", price: 1200},
    { name: "TV", price: 1240}
]
function sortProducts(products){
    return products.sort((productA, productB)=> productB.price - productA.price);
}

console.log( sortProducts(products));