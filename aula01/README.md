# Aula 01: Introdução ao Node.js

## Objetivos da Aula:
- Introdução ao Node.js e ao Express.
- Criar um servidor simples com Node.js.
- Normalizar a porta do servidor.
- Configurar um tratamento básico de erros.

## Passos para rodar o servidor:

1. Crie o projeto com o comando:
   ```bash
   npm init
   ```
   Preencha as informações conforme necessário. Isso criará o arquivo `package.json`.

2. Instale o Express com o comando:
   ```bash
   npm install express
   ```
   Isso adicionará o Express como dependência do seu projeto.

3. Crie o arquivo `server.js` com o código fornecido. Este arquivo contém a configuração do servidor e o roteamento básico.

4. Crie o arquivo `index.html` para a interface da aplicação, conforme o exemplo.

5. Crie o arquivo `style.css` para o estilo básico da página, conforme o exemplo.

6. Execute o servidor com o comando:
   ```bash
   node server.js
   ```
   Isso iniciará o servidor na porta 3000 (ou qualquer outra porta configurada).

7. Abra o navegador e acesse:
   ```bash
   http://localhost:3000
   ```
   Você verá a página com a descrição da Aula 01 e o conteúdo da aplicação.

## Estrutura do Projeto:

- **index.html**: Contém o conteúdo HTML básico da aula.
- **style.css**: Define o estilo visual da página.
- **server.js**: Cria o servidor utilizando Node.js e Express.
- **README.md**: Este arquivo, que explica os passos para rodar o servidor e as informações do projeto.

## Explicação:

- O servidor foi configurado para servir um arquivo HTML estático. Ele também lida com erros de maneira básica e usa o Express para facilitar o roteamento.
- O código está preparado para ser expandido nas próximas aulas, onde você aprenderá a criar um sistema mais dinâmico com Node.js.
