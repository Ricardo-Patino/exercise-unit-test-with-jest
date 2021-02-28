// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}
/*********Conversión de DOLAR a YEN */
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yenes
    let valueInYenes = 0.83 * oneEuroIs.JPY;
    //return the yenes value
    return valueInYenes;
}

module.exports = { fromEuroToDollar, fromDollarToYen };