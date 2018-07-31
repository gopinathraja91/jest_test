// const sum = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


const assert= require("chai").assert;
const app=require("../sketch")


describe('app',function(){

    it('app should return hello',function(){

        assert.equal(app(),'hello'); 
    });

});