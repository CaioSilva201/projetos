# Projeto-PDI-Jornada
As informações sobre o ciclo de evolução profissional dos colaboradores estão dispersas ou carecem de uma visão unificada. Esta história de usuário visa centralizar os pilares do desenvolvimento do colaborador (Ciclo Journey, Check-ins, Mapeamento de Habilidades e PDI) em uma única tela/dashboard

Jira: https://projetojornada.atlassian.net/jira/software/projects/PJ/list?jql=project%20%3D%20PJ%20ORDER%20BY%20cf%5B10019%5D%20ASC

# 🚀 Talent Journey - Perfil de Desenvolvimento

> Projeto de implementação do Dashboard de Desenvolvimento Humano e Acompanhamento de Carreira para colaboradores da empresa.

---

## 📋 História de Usuário (User Story)

**Como** colaborador da empresa,  
**Quero** visualizar meu perfil de desenvolvimento com o ciclo anual Journey, minhas etapas de check-in e habilidades mapeadas,  
**Para que** eu possa acompanhar meu progresso, receber feedbacks e gerenciar meu PDI de forma centralizada.

---

## ✅ Critérios de Aceitação (Definition of Ready)

Para que a interface seja considerada concluída, ela deve atender rigorosamente aos seguintes requisitos:

*   **Dados do Colaborador:** Exibir nome, cargo, nível e `@usuário` do colaborador de forma clara.
*   **Status do Ciclo:** Mostrar status, etapa atual, data de início e fim do ciclo vigente.
*   **Ações Rápidas:** Botões funcionais e estilizados para `Dashboard`, `My PDI` e `Start Feedback Collection`.
*   **Timeline do Ciclo:** Renderizar o *Annual Journey Cycle* contendo 4 etapas numeradas e suas respectivas descrições.
*   **Matriz de Competências:** Exibir seção *Skills* em formato expansível (Acordeão).
*   **Navegação por Abas:** Implementar abas para `My Journey` (com badge de notificação visível) e `Pending Assessments`.
*   **Fidelidade Visual:** Layout totalmente responsivo e fiel à identidade visual (UI/UX) da empresa.

---

## 🛠️ Stack Tecnológica Recomendada

*   **Framework:** React (Vite ou Next.js)
*   **Estilização:** Tailwind CSS (ou CSS Modules para isolamento de escopo)
*   **Ícones:** Lucide React / React Icons
*   **Versionamento:** Git & GitHub

---

## 🗂️ Planejamento e Fluxo de Trabalho (Roadmap de Sprints)

O projeto foi dividido em 4 ciclos de entrega (Sprints) para garantir organização e foco na qualidade do código.

### 🔄 Sprint 0 — Setup & Alinhamento
*   [ ] Inicializar repositório Git com a estrutura de pastas padronizada.
*   [ ] Configurar as ferramentas de qualidade de código (Linters, Formaters, Reset CSS).
*   [ ] Levantar requisitos visuais (paleta de cores institucionais, fontes e espaçamentos).
*   [ ] Mapear os componentes reutilizáveis que compõem a tela.
*   [ ] Estruturar o quadro Kanban (Trello/GitHub Projects) com o Backlog inicial.

### 📐 Sprint 1 — Base & Layout Estrutural
*   [ ] Configurar variáveis globais de tema (Tokens de Cores da empresa: azul escuro, roxo, cinza claro).
*   [ ] Implementar o componente de **Header** (Logo da empresa, avatar do usuário, seletor de idioma e menu de navegação).
*   [ ] Implementar a navegação por abas (`My Journey` / `Pending Assessments`).

### 👤 Sprint 2 — Componentes Principais (Core UI)
*   [ ] Desenvolver o **Card de Perfil** do colaborador (foto, nome, cargo, datas e status do ciclo).
*   [ ] Desenvolver o componente **Annual Journey Cycle** (Timeline horizontal/vertical numerada de 4 etapas).
*   [ ] Criar e estilizar os botões de ação rápida com estados de *hover* e foco corretos.

### 📊 Sprint 3 — Componentes Secundários & Ajustes Finos
*   [ ] Implementar a seção de **Skills** utilizando comportamento de acordeão (expandir/colapsar).
*   [ ] Realizar testes de responsividade em múltiplos dispositivos (Mobile, Tablet e Desktop).
*   [ ] Validar a interface contra o design original ("pixel-perfect").

### 🎉 Sprint 4 — Entrega & Definição de Pronto (DoD)
*   [ ] Revisão final de código (*Code Review*) e refatoração para melhoria de performance.
*   [ ] Garantir que o projeto atenda ao *Definition of Done*: 100% renderizado, sem erros no console e aprovado visualmente.
*   [ ] Gravação da Demo do projeto / Deploy em produção (Vercel/Netlify).

---

## 📐 Estrutura do Kanban (Mapeamento de Tarefas)

Abaixo estão as tarefas mapeadas que devem ser distribuídas nas colunas `Backlog`, `To Do`, `In Progress`, `Review` e `Done` do seu gerenciador de projetos:

| ID | Categoria | Tarefa |
| :--- | :--- | :--- |
| **01** | Design/UX | Levantamento de requisitos visuais (cores, fontes, espaçamentos) |
| **02** | Setup | Criar estrutura base do projeto (HTML/CSS/React) |
| **03** | Arquitetura | Mapear componentes reutilizáveis da tela |
| **04** | Design/UX | Definir paleta de cores (azul escuro, roxo, cinza claro) |
| **05** | Design/UX | Escolher tipografia e tamanhos de fonte |
| **06** | Design/UX | Criar protótipo/wireframe dos componentes |
| **07** | Frontend | Implementar Header (logo, avatar, idioma, menu) |
| **08** | Frontend | Implementar abas: My Journey e Pending Assessments |
| **09** | Frontend | Criar card de perfil do colaborador |
| **10** | Frontend | Criar componente Annual Journey Cycle (timeline 4 etapas) |
| **11** | Frontend | Implementar seção Skills (acordeão) |
| **12** | Frontend | Adicionar botões de ação (Dashboard, My PDI, Start Feedback Collection) |

---

## 🚀 Manual de Execução Local

```bash

########## Clonagem do repositório ##########
git clone [https://github.com/JoaoCarnevalliDaSilva/Projeto-PDI-Jornada]


########## Atualização da versão da pasta do projeto ##########
git pull


########## Rodar apenas uma vez por projeto ##########
git init


########## Verificar qual arquivo teve alteração ########
git status


########## Adicionar arquivos no commit ##########
git add . # Para todos os arquivos
git add # nome do arquivo #

git add style.css
# Exemplo para caso queira adicionar apenas um arquivo


########## Commit das edições ##########
git commit -m "texto para ficar no commit" 


########## Publicar no Github ##########
git push origin -u main # publica na main / e na primeira vez
git push # caso tenha mais publicações



