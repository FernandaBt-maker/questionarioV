const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Dados recebidos:', data);

  // Salvar em um arquivo JSON (para simplicidade)
  const filePath = path.join(__dirname, 'submissions.json');
  let submissions = [];
  if (fs.existsSync(filePath)) {
    try {
      submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
      console.error('Erro ao ler arquivo de submissões:', err);
    }
  }
  submissions.push({ ...data, timestamp: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

  res.status(200).json({ message: 'Dados recebidos com sucesso!' });
});

// Rota para visualizar submissões (opcional)
app.get('/submissions', (req, res) => {
  const filePath = path.join(__dirname, 'submissions.json');
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});