console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum }; 


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen= function (valueInDollar){
    let valueinYen= ((valueInDollar / 1.07) * 156.5)
    return (valueinYen);
}

const fromYenToPound= function(valueinYen){
    let valueInPound= ((valueinYen / 156.5) *0.87)
    return (valueInPound);
}
  
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound}
 


