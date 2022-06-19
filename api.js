
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const client = require('./connection.js')
dotenv.config();
const port = process.env.port;


app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`)})


client.connect();

app.get('/peserta', (req, res)=>{
    client.query(`Select * from peserta`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/peserta/:id', (req, res)=>{
    client.query(`Select * from peserta where idpeserta=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/peserta', (req, res)=> {
    const pesertac = req.body;
    let insertQuery = `INSERT INTO peserta(idpeserta, namadepanpeserta, namabelakangpeserta, usiapeserta, ultah) 
                       VALUES(${pesertac.idpeserta}, '${pesertac.namadepanpeserta}', '${pesertac.namabelakangpeserta}', ${pesertac.usiapeserta}, '${pesertac.ultah}')`
                        

   /* let insertQuery = `INSERT INTO peserta(idpeserta, namadepanpeserta, namabelakangpeserta, usiapeserta, ultah) 
                       VALUES(5, 'budi', 'waseso', 51, '1960-09-01')` */
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/peserta', (req, res)=> {
    const pesertac = req.body;
    let updateQuery = `update peserta
                       set namadepanpeserta = '${pesertac.namadepanpeserta}',
                       namabelakangpeserta = '${pesertac.namabelakangpeserta}',
                       usiapeserta = ${pesertac.usiapeserta},
                       ultah = '${pesertac.ultah}'
                       where idpeserta = ${pesertac.idpeserta}`
                       

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/peserta/:id', (req, res)=> {
    let insertQuery = `delete from peserta where idpeserta=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})