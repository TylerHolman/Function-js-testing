require('./function.js')



test(`this should return the integer of 2`, () => {
    expect(returnTwo()).toEqual(2)
})

describe(`should return the value input for greeting`, () => {

    test(`this test should return the name of James`, () =>{
        expect(greeting(`James`)).toEqual(`Hello, James.`)
        expect(greeting(`Jill`)).toEqual(`Hello, Jill.`)
    })
})

describe(`should return the two integers sum`, () => {
    test(`should return 3`, () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
})