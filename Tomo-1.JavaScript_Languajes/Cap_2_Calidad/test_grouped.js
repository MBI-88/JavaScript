'use strict';
//Variante agrupada
describe('pow',function(){
    it('for negative n the rusult is NaN',function(){
        assert.isNaN(pow(2,-1))
    });
    it('for non-integer n the result is NaN',function(){
        assert.isNaN(pow(2,1.5))
    })
    describe('raise x to power 3',function(){
        function makeTest(x,n){
           let expected = x ** n ;

           it(`${x} in the power 3 is ${expected}`,function(){
               assert.equal(pow(x,n),expected)
           });
       }
       for (let x = 1;x <= 5; x++){
           for (let n = 1;n <= 5;n++){
               makeTest(x,n);
           }

       }
    })

});