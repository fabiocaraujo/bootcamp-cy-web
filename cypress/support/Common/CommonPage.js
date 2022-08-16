/// <reference types="cypress" />

const el = require('./CommonElements').commonElements

class CommonPages {
    validatePageTitle(value){
        cy.title().should('include', value)
    }

    validateBePageTitleIsNotEmpty(){
        cy.get(el.PAGE_TITLE).should('not.be.empty')
    }

    validateTitleInPage(text) {
        cy.get(el.PAGE_TITLE).should('contain.text', text)
    }

    clickInProductOnPage(){
        this.awaitImg(el.CONTAINER_IN_PRODUCTS_PAGE.IMG_ITEM).then(()=> {
            cy.get(el.CONTAINER_IN_PRODUCTS_PAGE.ITEM).first().click()
        })
    }

    clickFirstProductOnPage(){
        this.awaitImg(el.CONTAINER_IN_PRODUCTS_PAGE.IMG_FIRST_ITEM).then(() => {
            cy.get(el.CONTAINER_IN_PRODUCTS_PAGE.FIRST_ITEM).first().click()
        })
    }

    clickFirstProduct(){
        this.awaitImg(el.CONTAINER_IN_PRODUCTS_PAGE.IMG_FIRST_ITEM).then(() => {
            cy.get(el.CONTAINER_IN_PRODUCTS_PAGE.ITEM).first().click()
        })
    }

    clickSearchedProduct(){
        cy.get(el.CONTAINER_IN_PRODUCTS_PAGE.PRODUCT_SEARCHED).click()
    }

    beShowSomeProduct(){
        this.awaitImg(el.CONTAINER_IN_PRODUCTS_PAGE.IMG_FIRST_ITEM, { timeout: 100000 }).then(() => {
            cy.get(el.CONTAINER_IN_PRODUCTS_PAGE.FIRST_PRODUCT_NAME, { timeout: 100000 }).should('not.be.empty')
        })
    }

    clickInMenuLogin(){
        cy.get(el.MENU_LOGIN_HOME).click()
    }

    awaitImg(element){
        return cy.get(element,{ timeout: 60000 }).should('be.visible').and('have.attr', 'src')
    }
}

export default new CommonPages()