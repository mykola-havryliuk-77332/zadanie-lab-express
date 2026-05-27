const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({
    imie: 'Mykola',
    nazwisko: 'Havryliuk',
    indeks: '77332'
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});