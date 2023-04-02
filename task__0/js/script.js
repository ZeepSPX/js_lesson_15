// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням. Використати обидва методи стосовно обидвох об’єктів (використати call, apply)-----------------------------

let obj1 ={
    numbers: [2, 1, 78, 69,3],

    getSum: function () {
        return this.numbers.reduce((prevSum, element) => prevSum + element)
    },
}

let obj2 = {
    numbers: [5, 3, -5, 9, 4, 3, -2, 5, 5],

    getProduct: function (minValue, maxValue) {
        return this.numbers.reduce((prevSum, num) => num >= minValue && num <= maxValue ? prevSum * num : prevSum, 1)
    },
}

let sum2 = obj1.getSum.call(obj2)
let prod1 = obj2.getProduct.call(obj1, 3, 7)

let sum2Apply = obj1.getSum.apply(obj2)
let prod1Apply = obj2.getProduct.apply(obj1, [3, 7])

console.log(`Call: Sum (obj1) = ${obj1.getSum()} Product(obj2) = ${prod1}`);
console.log(`Apply: Product (obj2) = ${obj2.getProduct(10, 22)} Sum(obj1) = ${sum2}`);









