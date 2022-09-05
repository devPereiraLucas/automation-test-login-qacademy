export default new class SigninPage {
    go() {
        cy.visit('/')
        cy.get('.App-header p').should('have.text', 'Login')
    }

    fillForm(user: { user_login: string; password: string }) {
        cy.get('input[placeholder$="usuário"]').type(user.user_login)
        cy.get('input[placeholder^="senha"]').type(user.password)
    }

    submit() {
        cy.get('#btnLogin').click()
    }

    modalContentShouldBe(expectedMessage: string) {
        cy.get('.swal2-popup .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage: string) {
        cy.get('div[role=status]').should('have.text', expectedMessage)
    }
}