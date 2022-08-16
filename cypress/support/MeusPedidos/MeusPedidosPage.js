/// <reference types="cypress" />

const el = require('./MeusPedidosElements').meusPedidosElements

class MeusPedidosPages{
    validatePage(){
        cy.get(el.TITLE_PAGE, {timeout: 3000}).should('be.visible').should('have.text', 'Meus pedidos')
        cy.get(el.ORDERED_NUMBER_FIRST_IN_PAGE, {timeout: 3000}).should('not.be.empty')
    }
}

export default new MeusPedidosPages()