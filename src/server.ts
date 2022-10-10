import express from "express"
const porta = 9090

const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(porta, ()=>{console.log(`Servidor Rodando na porta: ${porta}`)})