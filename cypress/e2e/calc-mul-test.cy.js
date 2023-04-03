/// <reference types="cypress" />


const Problems = [
    {
        tcId: 'TC_ADD_01',
        operation: 'Add',
        firstNum: 3,
        secondNum: 5,
        intergerOnly: false, 
        expResult: 8,
    }
]

Problems.forEach(problem => {
    it(`Verify correct result is produced after peforming ${problem.operation} operation between ${problem.firstNum} and ${problem.secondNum}`, () => {

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