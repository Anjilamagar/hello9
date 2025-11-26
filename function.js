// const numbers = [2, 2, 1]

// const double = numbers.map((n, index) => {
//     console.log(n, index);
//     return n * 2;

// })

// console.log(double);

// const isAvailable = numbers.find((item,i) => {
//     return item === 2
// })
// console.log(isAvailable, i);


// const isAvailable = numbers.some((item, i) => {
//     console.log(i);
//     return item === 2
// })
// console.log(isAvailable);


// const isAvailable = numbers.every((item, i) => {
//     console.log(i)
//     return item === 2
// })
// console.log(isAvailable);


// const total = numbers.reduce((item, initial) => {

//     return item + initial
// })
// console.log(total);







const cart = [
    {
        name: "tv",
        qty: 5,
        price: 20
    },
    {
        name: "laptop",
        qty: 1,
        price: 50
    }
]
const total = cart.reduce((total, value) => {
    console.log(value, total);

    return total + (value.qty * value.price)
}, 0)
console.log(total);

