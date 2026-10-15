# Registo de Jogos · v2.0.0

PWA de voleibol, em português de Portugal, para registar os pontos de um jogador por set e por jogo. Funciona **offline**, sem contas, serviços externos nem dependências.

## Instalação no GitHub Pages

1. Cria um repositório no GitHub e coloca **todos os ficheiros e a pasta `icons/` na raiz**, mantendo os nomes e caminhos.
2. Em **Settings → Pages → Build and deployment**, escolhe **Deploy from a branch**, `main` e `/ (root)`; guarda.
3. Abre `https://UTILIZADOR.github.io/REPOSITORIO/` num telemóvel e instala pelo menu do navegador: no Android, **Instalar aplicação**; no iPhone (Safari), **Partilhar → Adicionar ao ecrã principal**.
4. Em ambiente local, usa um servidor HTTP (por exemplo `python3 -m http.server 8000`) para testar a instalação. Abrir `index.html` como `file://` permite usar a aplicação, mas não instala o service worker.

## Manual rápido

- **Primeira utilização:** indica o nome do jogador.
- **Calendário:** selecciona a época; toca num jogo para registar pontos ou ver as estatísticas; **+ Novo jogo** cria um encontro manual.
- **Novo:** regista pontos por set. Escolhe **Set 1–5**, toca em **Ponto** para somar, **Anular** para desfazer e **Terminar** para guardar e abrir o histórico.
- **Estatísticas:** todos os jogos por data decrescente, filtros por época, pontos por set e média; jogos passados sem registo aparecem como **Sem registo**, não contam na média. Um jogo terminado com zero pontos conta.
- **Configuração:** muda a época activa e o tema, exporta/importa um JSON de segurança e reinicia todos os dados (com confirmação).

## Actualizações e segurança dos dados

O `sw.js` contém a versão da cache (`VERSION`). Em cada publicação **altera essa versão** (por exemplo `v2.0.1`) e também o número de versão apresentado no `index.html` e no README. Faz deploy dos ficheiros todos em conjunto. A app procura actualizações ao abrir/regressar ao ecrã e periodicamente; apresenta **Actualizar** se houver versão nova. **Não interrompe um jogo em curso.** O telemóvel pode demorar a detectar versões novas, consoante o navegador e a ligação.

Os dados vivem no `localStorage` da origem/site; o service worker só gere ficheiros da aplicação, nunca apaga o histórico. **A primeira passagem de `file://` para GitHub Pages não transfere automaticamente dados**, pois são origens distintas: exporta o JSON na versão antiga e importa-o no site publicado. Se mudares de domínio, limpares os dados do site ou desinstalares com eliminação dos dados, podes perdê-los: faz backups JSON regulares.

A agenda incluída contém **22 jogos de Cadetes de 2026/27**, sem actualização automática. A importação de novos calendários e edição de encontros continuam previstas para evolução futura.

## Estrutura

- `index.html` — aplicação completa (HTML/CSS/JS), incluindo calendário inicial.
- `manifest.webmanifest` — descrição e instalação PWA.
- `sw.js` — offline/cache e actualizações.
- `icons/` — ícones da aplicação.

Piquinho Software — **Craft with Altitude. Built with Joy.**
