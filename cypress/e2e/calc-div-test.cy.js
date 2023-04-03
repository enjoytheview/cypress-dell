/// <reference types="cypress" />


const Problems = [
    {
        tcId: 'TC_DIV_01',
        operation: 'Divide',
        firstNum: 1,
        secondNum: 0,
        intergerOnly: false, 
        expResult: null,
        errorMessage: 'Divide by zero error!'
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
        if (problem.errorMessage === undefined) {
            cy.get('input[name="numberAnswer"]').should('have.value', problem.expResult)
        } else {
            cy.get('font[color="red"] > i > label[id="errorMsgField"]').should('have.text', problem.errorMessage)
        }
    })
});