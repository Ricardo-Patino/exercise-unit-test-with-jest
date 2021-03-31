test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

/* Test para yuanes*/

test("One Yen should be 0.83 euros. one euro should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = fromDollarToYen(3.5)

    // is 1 dolar son 0.83 euros, entonces 3.5 dolares deberian ser = (0.83 * 127.9)
    const expected = 0.83 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})


test("One dollar should be 0.83 euros. one euro should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = fromDollarToYen(3.5)

    // is 1 dolar son 0.83 euros, entonces 3.5 dolares deberian ser = (0.83 * 127.9)
    const expected = 0.83 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})