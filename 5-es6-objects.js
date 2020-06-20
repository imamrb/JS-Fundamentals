let name = "Imam"
let myAge= 25

let user = {
    name, 
    age: myAge,
    location: 'Bangladesh'
}
// console.log(user) //{ name: 'Imam', age: 25, location: 'Bangladesh' }



//Destructuring

let product = {
    label: "You don't know JS",
    price: 10 + '$' ,
    stock: 201,
    salePrice: undefined,
   // rating: 4.2
}
// let label = product.label
// let price = product.price

let {label: productLabel, price, rating = 5} = product
//console.log(productLabel, price, rating )

let transaction = (type, {label, price, stock = 0} = {}) => {
    console.log(type, label, price, stock)
}
transaction('order', product)


/****Objeect property */

const userName = [
    {
        name: 'Imam'
    },
    {
        name: 'Shuvro'
    },
    {
        name: 'Santho'
    }
]
console.log({ name })