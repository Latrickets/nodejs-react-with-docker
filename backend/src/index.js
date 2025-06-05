const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Mensaje desde backend' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});

