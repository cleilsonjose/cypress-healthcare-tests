// Aguardar painel carregar completamente
Cypress.Commands.add('waitForPainelLoad', () => {
  cy.get('body', { timeout: 30000 }).should('be.visible');
  cy.wait(2000);
});

// Selecionar região
Cypress.Commands.add('selectRegiao', (regiao) => {
  cy.contains(regiao, { matchCase: false }).click();
  cy.wait(1000);
});

// Validar formato de número brasileiro
Cypress.Commands.add('validateBrazilianNumber', () => {
  cy.get('body').should(($body) => {
    const text = $body.text();
    const numberPattern = /\d{1,3}(?:\.\d{3})*(?:,\d+)?/;
    expect(text).to.match(numberPattern);
  });
});

// Validar formato de data brasileira
Cypress.Commands.add('validateBrazilianDate', () => {
  cy.get('body').should(($body) => {
    const text = $body.text();
    const datePattern = /\d{2}\/\d{2}\/\d{4}/;
    expect(text).to.match(datePattern);
  });
});

// Verificar se gráfico está visível
Cypress.Commands.add('verifyChartVisible', () => {
  cy.get('canvas, svg, [class*="chart"], [class*="grafico"]', { timeout: 10000 })
    .should('be.visible');
});

// Intercepta todas as APIs
Cypress.Commands.add('interceptAllAPIs', () => {
  cy.intercept('GET', '**/*.json').as('apiJson');
  cy.intercept('GET', '**/covid.saude.gov.br/**').as('apiCovid');
  cy.intercept('GET', '**/opendata.*/**').as('apiOpenData');
});

// Log customizado
Cypress.Commands.add('logStep', (step) => {
  cy.log(`🔹 ${step}`);
});