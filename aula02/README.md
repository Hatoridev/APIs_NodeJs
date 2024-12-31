# Aula 02: Depuração, Separação do Servidor e Início do CRUD

## Objetivos da Aula:
- Como depurar aplicações Node.js.
- Separar o código do servidor em diferentes arquivos.
- Configurar o **npm start** para iniciar o servidor.
- Instalar e usar o **nodemon** para recarga automática.
- Iniciar a construção de um CRUD REST básico.

## Passos para rodar a aplicação:

1. **Configuração do projeto:**
   - Crie o projeto com o comando:
     ```bash
     npm init -y
     ```
   - Instale as dependências com o comando:
     ```bash
     npm install express nodemon
     ```

2. **Rodando a aplicação:**
   - Para rodar a aplicação em modo de desenvolvimento, use o comando:
     ```bash
     npm run dev
     ```
     Isso iniciará o servidor com **nodemon**, que irá reiniciar automaticamente a cada mudança no código.

   - Para rodar em produção (sem recarga automática):
     ```bash
     npm start
     ```

3. **Testando a API:**
   - Acesse a URL `http://localhost:3000` no seu navegador para visualizar a página inicial.
   - Acesse `http://localhost:3000/api/products` para testar a rota de listagem de produtos (ainda não implementada).

## Explicação do Código:

- O servidor foi separado em dois arquivos: `server.js` e `app.js`. O `server.js` é responsável apenas por iniciar o servidor, enquanto o `app.js` contém a configuração do Express e as rotas.
- Usamos o **nodemon** para recarregar automaticamente o servidor sempre que houver alterações no código.
- A API de produtos foi iniciada com uma rota simples (`/api/products`) que ainda precisa de implementação completa.

