const express = require('express');
const { rgbToHex,hexToRgb } = require('./conversorDeCores');
const request = require('request');
const { response } = require('express');

const port = 8080;

const app = express();

app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

app.get('/status', (req, res) => {
  res.send('Servidor Funcionando Normalmente')
})

app.get('/rgbtohex', (req, res) => {
   

    res.send("Conversão RGB para HEX:"+rgbToHex(255,5,255))
})

app.post('/apiRGBtoHEX', (req, res) => {
  console.log('Requisição recebida')
  console.log(req.body)
  const {r,g,b} = req.body;
  
  console.log("RGB to HEX: " + rgbToHex(parseInt(r),parseInt(g),parseInt(b)))  

});

app.post('/apiHEXtoRGB', (req, res) => {
    console.log('Requisição recebida')
    console.log(req.body)
    const {hex} = req.body;

    console.log("HEX to RGB: " + hexToRgb(hex))

  })

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})



