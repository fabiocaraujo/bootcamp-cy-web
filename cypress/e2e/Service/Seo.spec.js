/// <reference types="cypress" />

describe('Validar API SEO', { tags: '@demo' }, () => {
    context('Dado que executo a consulta por sku', () => {
        let response
        it('Quando executo um GET em SEO, com o SKU', () => {
            const sku = 55006494

            cy.request({
                method: 'GET',
                url: `https://pdp-api.casasbahia.com.br/api/v2/seo/custom_links/CB/filter/${sku}`
            }).then(($res) => {
                response = $res
            })
        })

        it('Então a consulta será executada com sucesso', () => {
            expect(response.status).to.equal(200);
        })
    })
})