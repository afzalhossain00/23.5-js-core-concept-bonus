const numbers = [45, 65, 23, 98, 19];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }


// for of loop
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'xioami phone', price: 25000 },
    { id: 2, name: 'samsung phone', price: 55000 },
    { id: 3, name: 'iphone', price: 115000 },
    { id: 4, name: 'huawei laptop', price: 35000 },
    { id: 5, name: 'oneplus laptop', price: 45000 },
    { id: 6, name: 'mac book air', price: 215000 },
    { id: 7, name: 'nokia gadget', price: 18000 },
    { id: 8, name: 'realme Phone', price: 21000 },
];

// for (const product of products) {
//     console.log(product);
// }

function mathedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = mathedProducts(products, 'laPtOp');
console.log(result);