import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Teste do servidor');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor de teste rodando em http://localhost:${port}`);
}); 