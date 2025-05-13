const { sum, } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
}); 

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("1 dollars should be 146", function(){
    const { fromDollarToYen } = require('./app.js')    
    const yen = fromDollarToYen(1);
    expect(fromDollarToYen (1)).toBeCloseTo(146.26);
})

test("1 yen should be 0,813 Pounds", function(){
    const { fromYenToPound } = require('./app.js')    
    const yen = fromYenToPound(1);
    expect(fromYenToPound (1)).toBeCloseTo(0.0055);
})

