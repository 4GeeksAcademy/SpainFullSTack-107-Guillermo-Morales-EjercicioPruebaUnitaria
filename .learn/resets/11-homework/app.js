//console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }

const fromDollartoYen= function (valueInDollar){
    let valueinYen= ((valueInDollar / 1.07) * 156.5)
    return valueinYen;
}
module.exports = { sum, fromDollartoYen }
