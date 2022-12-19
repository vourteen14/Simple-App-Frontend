import express from 'express';
import bodyParser from 'body-parser';
const axios = require('axios');
const app = express();
const port = 3190;
const config = {
  headers:{
    "Content-Type": "application/json",
    "Authorization": "Token b50c7491e49da5469bec553657865505e0cb192c"
  }
};
app.use(bodyParser.urlencoded({ extended: true }));

function whatHttpUse(meth: string) {
  return "Kita menggunakan method " + meth;
}

app.get('/', (req, res) => {
  axios.get('https://dev-api.karuhun.online/api/ngaran/', config)
  .then(response => {
    //res.send(response.data);
    //res.send(whatHttpUse("GET"))
    let data = response.data;
    let data2 = data['result'];
    res.send(data2);
    //data2.forEach((item) => {
    //  res.send('ID: ' + item.id + '\n' + 'Nama: ' + item.nama + '\n' + 'Pekerjaan: ' + item.pekerjaan + '\n' + 'Kota: ' + item.kota + '\n');
    //})
  })
  .catch(error => {
    res.send(error);
  });
});

app.post('/', (req, res) => {
  res.send(whatHttpUse("POST"));
  //Test typescript change type data
  //res.send(whatHttpUse(112));
});

app.put('/', (req, res) => {
  res.send(whatHttpUse("PUT"));
});

app.delete('/', (req, res) => {
  res.send(whatHttpUse("DELETE"));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});