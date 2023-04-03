/// <reference types="cypress" />


const Problems = [
    {
        tcId: 'TC_ADD_01',
        operation: 'Add',
        firstNum: 1,
        secondNum: 1,
        intergerOnly: false, 
        expResult: 2,
    },
    {
        tcId: 'TC_ADD_02',
        operation: 'Add',
        firstNum: 0,
        secondNum: 1,
        intergerOnly: false, 
        expResult: 1,
    },
    {
        tcId: 'TC_ADD_02',
        operation: 'Add',
        firstNum: 1,
        secondNum: 0,
        intergerOnly: false, 
        expResult: 1,
    },
    {
        tcId: 'TC_ADD_04',
        operation: 'Add',
        firstNum: 0,
        secondNum: 0,
        intergerOnly: false, 
        expResult: 0,
    },
    {
        tcId: 'TC_ADD_05',
        operation: 'Add',
        firstNum: 11,
        secondNum: 12,
        intergerOnly: false, 
        expResult: 23,
    },
    {
        tcId: 'TC_ADD_06',
        operation: 'Add',
        firstNum: 100,
        secondNum: 101,
        intergerOnly: false, 
        expResult: 201,
    },
    {
        tcId: 'TC_ADD_07',
        operation: 'Add',
        firstNum: 9313257,
        secondNum: 6480,
        intergerOnly: false, 
        expResult: 9319737,
    },
    {
        tcId: 'TC_ADD_08',
        operation: 'Add',
        firstNum: -1,
        secondNum: -2,
        intergerOnly: false,
        expResult: -3,
    },
    {
        tcId: 'TC_ADD_09',
        operation: 'Add',
        firstNum: 2.2,
        secondNum: 3.3,
        intergerOnly: false,
        expResult: 5.5,
    },
    {
        tcId: 'TC_ADD_10',
        operation: 'Add',
        firstNum: 2.2,
        secondNum: 3.3,
        intergerOnly: true,
        expResult: 6,
    },
    {
        tcId: 'TC_ADD_11',
        operation: 'Add',
        firstNum: 2.2,
        secondNum: 3.2,
        intergerOnly: true,
        expResult: 5,
    },
    {
        tcId: 'TC_ADD_12',
        operation: 'Add',
        firstNum: 2.3,
        secondNum: 3.3,
        intergerOnly: true,
        expResult: 6,
    },
]

Problems.forEach(problem => {
    it(`${problem.tcId}: Verify correct result is produced after peforming ${problem.operation} operation between ${problem.firstNum} and ${problem.secondNum}`, () => {

        cy.visit('/BasicCalculator')

        // enter both numbers 
        cy.get('input[name="number1"]')
            .type(problem.firstNum)
        cy.get('input[name="number2"]')
            .type(problem.secondNum)

        // perform operation
        cy.get('select[name="selectOperation"]').select(problem.operation)
        cy.get('input[value="Calculate"]').click()

        // assert the result 
        cy.get('input[name="numberAnswer"]').should('have.value', problem.expResult)
    })
});