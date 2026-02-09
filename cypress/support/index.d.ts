/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Comando customizado para login no sistema SUS
     * @example cy.loginSUS('12345678909', 'senha123')
     */
    loginSUS(cpf: string, senha: string): Chainable<{ authenticated: boolean; perfil: string }>;

    /**
     * Comando customizado para registrar vacinação
     * @example cy.registrarVacinacao({ nome: 'Maria Silva', cpf: '12345678909' })
     */
    registrarVacinacao(dadosPaciente: any): Chainable<{ sucesso: boolean; protocolo: string }>;
  }
}