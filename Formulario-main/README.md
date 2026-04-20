# Backend para Formulário

Este projeto inclui um backend simples em Node.js para receber os dados do formulário.

## Como usar

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor:
   ```
   npm start
   ```
   Ou para desenvolvimento (com nodemon):
   ```
   npm run dev
   ```

3. Abra o `main.html` no navegador. O servidor estará rodando em `http://localhost:3000`.

4. Preencha e envie o formulário. Os dados serão salvos em `submissions.json`.

## Visualizar submissões

Acesse `http://localhost:3000/submissions` para ver todas as submissões em JSON.

## Produção

Para produção, você pode hospedar em serviços como Heroku, Vercel, ou Netlify Functions. Ajuste a URL no `script.js` conforme necessário.

## Troubleshooting

- Se houver erro de CORS, o middleware `cors` está habilitado.
- Dados são salvos localmente em `submissions.json`. Para um banco de dados real, integre com MongoDB, PostgreSQL, etc.