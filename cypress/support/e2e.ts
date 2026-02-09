// Comandos customizados para simular cenários realistas de saúde

Cypress.Commands.add('loginSUS', (cpf) => {
  cy.log(`🔐 Autenticando no sistema com CPF: ${cpf.slice(0, 3)}******`);
});

Cypress.Commands.add('registrarVacinacao', (dadosPaciente) => {
  cy.log(`💉 Registrando vacinação para paciente: ${dadosPaciente.nome}`);
});