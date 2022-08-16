/// <reference types="cypress" />

describe('Validar API Destaque', { tags: '@demo' }, () => {
    context('Dado que executo a busca por sku e lojista', () => {
        let response
        it('Quando executo um requisição com o metodo GET, passando o SKU e lojista', () => {
            const sku = 55006494
            const lojista = 10037

            cy.request({
                method: 'GET',
                url: `https://api-destaque-descoberta.casasbahia.com.br/Destaque/Sku/${sku}/Lojista/${lojista}`
            }).then(($res) => {
                response = $res
            })
        })

        it('Então a consulta será executada com sucesso', () => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.not.empty
        })
    })
})