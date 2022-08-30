class ExperienciaPage {
    get #posicao() {return cy.get('[data-test="experience-title"]')}
    get #empresa() {return cy.get('[data-test="experience-company"]')}
    get #local() {return cy.get('[data-test="experience-location"]') }
    get #dataInicio() {return cy.get('#from')}
    get #dataFim() {return cy.get('#to')}
    get #descricao() {return cy.get('[rows="1"]')}
    get #btnAdd() {return cy.get('[data-test="experience-submit"]')}
    get #checkAtual() {return cy.get('[name="current"]')}

    addExperiencia(posicao, empresa, local, dataInicio, dataFim, descricao) {
        this.#posicao.type(posicao, { delay: 1000 })
        this.#empresa.type(empresa, { delay: 1000 })
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addExperienciaAtual(posicao, empresa, local, dataInicio, descricao) {
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#checkAtual.check()
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }
}
module.exports = new ExperienciaPage()