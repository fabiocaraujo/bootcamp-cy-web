/// <reference types="cypress" />

const el = require('./HomeElements').homeElements

class HomePage {
    validatePageTitle(value) {
        cy.title().should('include', value)
    }

    clickInDepartament(value) {
        value.forEach(linkDepartament => {
            cy.contains(linkDepartament).click()
        })
    }

    clickInMenuHamburguer() {
        cy.get(el.MENU_ALL_DEPARTMENTS).click()
    }

    searchProduct(value){
        cy.get(el.SEARCH).should('have.length', 1).then(() => {
            cy.get(el.SEARCH).type(value)
            cy.get(el.BTN_START_SEARCH).wait(3000).click()
        })
    }

    clickInCategory(value) {
        value.forEach(linkCategory => {
            cy.contains(linkCategory).click()
        })
    }

    fillSearch(text){
        cy.get(el.SEARCH).should('have.length', 1).then(() => {
            cy.get(el.SEARCH, { timeout: 6000 }).should('be.visible').and('be.empty').click()
            cy.get(el.SEARCH).type(text)
        })
    }

    clickInButtonSearch(){
        cy.get(el.SEARCH).should('have.length', 1).then(() => {
            cy.get(el.BTN_START_SEARCH).wait(3000).click()
        })
    }

    validateLogo(link){
        cy.get('#Logo').should('have.attr', 'href').and('include', link )
    }

    validateInputSearch(label){
        cy.get(el.SEARCH).should('have.prop', 'placeholder' ).and('eq', label)
    }

    validateQtdShoppingCart(quantidade){
        cy.get(el.SEARCH).should('have.id', 'itensCarrinho' ).and('eq', quantidade)
    }

    
}

export default new HomePage()