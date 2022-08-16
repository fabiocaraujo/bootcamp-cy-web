/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('fabio@bootcamp.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Fabio Araújo')
    });

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('fabioddfd@bootcamp.com', 'testefddfd@123')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
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



