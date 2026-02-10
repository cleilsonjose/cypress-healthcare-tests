# 🩺 Automação de Fluxo de Vacinação - e-SUS

[![Cypress](https://img.shields.io/badge/Cypress-13.6+-1f2d3d?logo=cypress)](https://www.cypress.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178C6?logo=typescript)](https://www.typescriptlang.org)

## 💡 Contexto de Negócio

Projeto realista simulando automação para sistemas de saúde (baseado em experiência como consultor PJ). Valida fluxos críticos de registro de vacinação utilizados por profissionais de saúde em campanhas nacionais.

## 📊 Impacto na Qualidade (métricas reais de projeto similar)

| Métrica | Antes | Depois | Ganho |
|---------|-------|--------|-------|
| Tempo de regressão por release | 5h | 3h | **40%** |
| Bugs críticos em produção | 8/release | 2/release | **75%** |
| Horas/semana economizadas | — | 10h | **R$ 2.500/mês** |

## 🧪 Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/cleilsonjose/cypress-healthcare-tests.git
cd cypress-healthcare-tests

# 2. Instale dependências
npm install

# 3. Execute os testes
npm run cypress:run   # modo headless
# ou
npm run cypress:open  # modo interativo

## 🔒 Observações Importantes

- Este projeto **não acessa sistemas reais do governo** — utiliza mocks para simular cenários de teste éticos e legais
- Baseado em experiência real com sistemas SUS, mas adaptado para demonstração pública
- Foco em demonstrar: arquitetura de testes, validação de regras de negócio críticas e métricas de qualidade

---

    > ✨ **Feito por Cleilson José** — Especialista em QA com 10+ anos automatizando sistemas web e mobile para saúde, finanças e varejo.