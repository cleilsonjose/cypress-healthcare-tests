describe('Painel Coronavírus - Testes Completos', () => {
  beforeEach(() => {
    cy.interceptAllAPIs();
    cy.visit('/');
    cy.waitForPainelLoad();
  });

  context('Carregamento Inicial', () => {
    it('CT01 - Deve carregar a página principal', () => {
      cy.url().should('include', 'covid.saude.gov.br');
      cy.get('body').should('be.visible');
    });

    it('CT02 - Deve ter título correto', () => {
      cy.title().should('contain', 'Coronavírus Brasil');
    });
  });

  context('Dados Nacionais', () => {
    it('CT03 - Deve exibir total de casos', () => {
      cy.validateBrazilianNumber();
      cy.contains(/casos/i).should('exist');
    });

    it('CT04 - Deve exibir total de óbitos', () => {
      cy.contains(/óbitos|obitos/i).should('exist');
    });

    it('CT05 - Deve exibir taxa de letalidade', () => {
      cy.contains(/letalidade/i).should('exist');
    });

    it('CT06 - Deve exibir data de atualização', () => {
      cy.validateBrazilianDate();
    });
  });

  context('Navegação por Regiões', () => {
    it('CT07 - Deve selecionar região Norte', () => {
      cy.selectRegiao('Norte');
    });

    it('CT08 - Deve selecionar região Nordeste', () => {
      cy.selectRegiao('Nordeste');
    });

    it('CT09 - Deve selecionar região Sudeste', () => {
      cy.selectRegiao('Sudeste');
    });

    it('CT10 - Deve selecionar região Sul', () => {
      cy.selectRegiao('Sul');
    });

    it('CT11 - Deve selecionar região Centro-Oeste', () => {
      cy.selectRegiao('Centro-Oeste');
    });
  });

  context('Links Externos', () => {
    it('CT12 - Deve ter link para Painel Interativo', () => {
      cy.contains(/painel interativo/i).should('exist');
    });

    it('CT13 - Deve ter link para OpenDataSUS', () => {
      cy.contains(/opendatasus|open data/i).should('exist');
    });

    it('CT14 - Deve ter opção de download CSV', () => {
      cy.contains(/csv|download|baixar/i).should('exist');
    });
  });

  context('Coronavírus SUS', () => {
    it('CT15 - Deve exibir informações sobre apps', () => {
      cy.contains(/sus|app|aplicativo/i).should('exist');
    });

    it('CT16 - Deve ter informações de contato', () => {
      cy.contains(/disque|136|contato/i).should('exist');
    });
  });

  context('Gráficos e Visualizações', () => {
    it('CT17 - Deve exibir gráfico de semanas epidemiológicas', () => {
      cy.verifyChartVisible();
      cy.contains(/semana.*epidemiol/i).should('exist');
    });

    it('CT18 - Deve exibir mapa do Brasil', () => {
      cy.get('svg, [class*="map"], [class*="brasil"]', { timeout: 10000 })
        .should('be.visible');
    });

    it('CT19 - Deve exibir gráficos de evolução', () => {
      cy.contains(/evolu|gráfico|grafico/i).should('exist');
    });
  });

  context('Performance', () => {
    it('CT20 - Deve carregar em menos de 30 segundos', () => {
      const start = Date.now();
      cy.visit('/').then(() => {
        const duration = Date.now() - start;
        expect(duration).to.be.lessThan(30000);
      });
    });
  });

  context('API e Dados', () => {
    it('CT21 - Deve fazer requisições à API', () => {
      cy.wait('@apiJson', { timeout: 15000 }).its('response.statusCode').should('eq', 200);
    });

    it('CT22 - Deve ter dados válidos na resposta', () => {
      cy.wait('@apiJson', { timeout: 15000 }).its('response.statusCode').should('be.oneOf', [200, 304]);
    });
  });
});