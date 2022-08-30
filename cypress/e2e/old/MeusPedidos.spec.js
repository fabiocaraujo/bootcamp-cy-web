/// <reference types="cypress" />

import MeusPedidosPage from '../../support/MeusPedidos/MeusPedidosPage'
import LoginPage from '../../support/Login/LoginPage'

import user from '../../fixtures/user.json'

describe('Validar meus pedidos', { tags: '@demo' }, () => {
    context('Dado que acesso meus pedidos', () => {
        it('Quando acesso a url "https://meuspedidos.casasbahia.com.br/"', () => {
            cy.navigate('https://meuspedidos.casasbahia.com.br/')
        })

        it('E realizo o login', () => {
            cy.wait(3000)
            LoginPage.fastLogin(user.cpf, Cypress.env('password'))
        })

        it('Então visualizo a pagina de meus pedidos', () => {
            MeusPedidosPage.validatePage()
        })
    })
})