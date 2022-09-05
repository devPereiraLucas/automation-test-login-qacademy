describe('home page', () => {
    it('App must be online', () => {
        cy.visit('/')
        cy.get('.App-header p').should('have.text', 'Login')
    })
})