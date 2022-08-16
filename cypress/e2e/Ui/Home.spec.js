/// <reference types="cypress" />

import HomePage from '../../support/Home/HomePage'
import CommonPage from '../../support/Common/CommonPage'

describe('Validar a home', { tags: '@demo' }, () => {
    before('Dado que acesso a home', () => {
        cy.navigate('/')
    })

    context('Dado que acesso a home', { tags: '@home' }, () => {
        it('Então devo visualizar a logo e ser direcionado para www.casasbahia.com.br', () => {
            const link = "www.casasbahia.com.br"
            HomePage.validateLogo(link)
        })

        it('E devo visualizar o campo de busca e exibir o "O que você está procurando?"', () => {
            const label = "O que você está procurando?"
            HomePage.validateInputSearch(label)
        })
    })

    context('Dado que realizo a busca de produtos', { tags: '@busca' }, () => {
        let termoBusca
        it('Quando insiro uma descrição no campo "O que vocé está procurando"', () => {
            const produto = "geladeira"
            termoBusca = produto.toString()

            HomePage.fillSearch(termoBusca)
        })

        it('E clico na "lupa"', () => {
            HomePage.clickInButtonSearch()
        })

        it('Então devo ser direcionado para tela de busca de produtos', () => {
            CommonPage.validateTitleInPage(termoBusca)
            CommonPage.beShowSomeProduct()
        })
    })
})