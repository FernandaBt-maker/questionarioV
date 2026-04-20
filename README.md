# Formulário com Backend

Este projeto é um formulário estratégico com backend serverless configurado para Vercel.

## Desenvolvimento Local

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar localmente
Para desenvolvimento local com o Node.js:
```bash
npm start
```
Ou com auto-reload:
```bash
npm run dev
```

Acesse `http://localhost:3000` e abra `main.html`.

## Deploy no Vercel

### Passo 1: Preparar o Git
Se não tiver repositório Git ainda:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Passo 2: Fazer Push para GitHub
1. Crie um repositório no [GitHub](https://github.com)
2. Adicione o remote e faça push:
```bash
git remote add origin https://github.com/SEU_USER/SEU_REPO.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Selecione seu repositório do GitHub
4. Vercel detectará automaticamente a configuração
5. Clique em "Deploy"

**Pronto!** Seu formulário estará ao vivo em `https://seu-projeto.vercel.app`

## Como Funciona

- **Frontend**: `main.html`, `script.js`, `style.css` - Formulário interativo
- **Backend**: `api/submit.js` - Serverless Function que recebe os dados
- **Configuração Vercel**: `vercel.json` - Define como rodar na plataforma

Quando alguém preenche e envia o formulário:
1. Os dados são enviados para `/api/submit`
2. A função serverless processa e retorna sucesso
3. O usuário vê a tela de confirmação

## Próximos Passos

Para armazenar os dados em banco de dados:
- **MongoDB Atlas** (gratuito, melhor para dados estruturados)
- **Supabase** (PostgreSQL + Backend, muito fácil)
- **Firebase** (sem código, da Google)

Cada uma tem integração simples com Vercel!