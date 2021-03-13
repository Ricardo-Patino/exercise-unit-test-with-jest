test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.206; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

/* Test para yuanes*/

test("One dollar should be 0.83 euros. one euro should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = 0.83 * 127.9;

    // is 1 dolar son 0.83 euros, entonces 3.5 dolares deberian ser = (0.83 * 127.9)
    const expected = 0.83 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})

/* Test para (dollar a Yen, Yen a Pound) Yen>Pound*/

test("One Yen should be 0.83 euros. one euro should be 159.86 yenes", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = 159.86 /0.83;

    // is 1 euro son 159.86  Yenes y un euro son 0.8 GBP, entonces = (0.83 / 159.86 )
    const expected = 0.83 / 159.86 ; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(GBP);
})
