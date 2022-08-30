/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('fabio@bootcamp.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Fabio Araújo')
        cy.title().should('eq', 'ConexaoQA')
    });

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('fabio@fd.com', 'teste@123')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });

    it.only('Deve fazer login com sucesso - Usando importação', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.title().should('eq', 'ConexaoQA')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.title().should('eq', 'ConexaoQA')
    });
});

/* 
    Funcionalidade: Login
    Eu como usuário das Conexão QA 
    Quero fazer o login 
    Para editar meu perfil

    Cenário: Login com sucesso
    Arrange - Dado - Pré-requisito -> Dado que eu esteja na tela de login
    Action - Quando - Ação do usuário - Quando eu inserir usuário e senha
    Assert - Então - Resultado esperado - Entào deve me direcionar para o Dashboard

    Esquema do cenário
    Quando eu inserir <usuario>
    E <senha>
    Então
    
    Exmeplos: 
    | usuario | senha |
    | "fabio@bootcamp.com" | "teste@123" |
    | "ana@via.com"

    Cenário: Validar msg de erro 
    Cenário: Recuperar senha



*/



