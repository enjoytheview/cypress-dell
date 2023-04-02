/// <reference types="cypress" />

const laptopModels = [
    {
        name: 'Inspiron',
        version: 14
    },
    {
        name: 'Inspiron',
        version: 15
    },
    {
        name: 'Inspiron',
        version: 16
    }
]

laptopModels.forEach(modelInfo => {
    const searchString = `${modelInfo.name} ${modelInfo.version}`
    it(`Verify user is able to search for ${searchString} from home page`, () => {
        cy.visit('/')
        cy.get('input[placeholder="Search Dell"]')
            .type(searchString)
            .type('{enter}')
        cy.contains(searchString).first().click()
        cy.get('h1 > span.page-title').should('have.text', `${searchString} Laptop`)
    })
});