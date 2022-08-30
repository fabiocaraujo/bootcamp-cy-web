/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => {
    cy.visit('login')
    cy.get('[data-test="login-email"]').type(email)
    cy.get('[data-test="login-password"]').type(senha)
    cy.get('[data-test="login-submit"]').click()
 })

 Cypress.Commands.add('criarPerfil', (cia, site, cidade, skills, github, minibio) => {
    cy.visit('criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.contains('Especialista em QA').click()
    cy.get('[data-test="profile-company"]').type(cia)
    cy.get('[data-test="profile-webSite"]').type(site)
    cy.get('[data-test="profile-location"]').type(cidade)
    cy.get('[data-test="profile-skills"]').type(skills)
    cy.get('[data-test="profile-gitHub"]').type(github)
    cy.get('[data-test="profile-bio"]').type(minibio)
    cy.get('[data-test="profile-submit"]').click()
  })

  Cypress.Commands.add('cadastro', (nome, email, senha, confirmaSenha) => {
    cy.visit('cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmaSenha)
    cy.get('[data-test="register-submit"]').click()
 })