const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`test crud jalan di port : ${port}.`);
});

const api = require('./belom kepake/api');

app.get('/horrors/', api.getAllHorrors);
app.get('/horrors/:id', api.getHorrorById);
app.post('/horrors/', api.addHorror);
app.put('/horrors/:id', api.updateHorror);
app.delete('/horrors/:id', api.deleteHorror);