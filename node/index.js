const express = require('express')
const app = express()
const porta = 3000

app.get('/',(req,res) =>{
    res.send('<h1>Full Cycle</h1>')
})

app.listen(porta,()=>{
    console.log('Rodando na porta ' + porta)
})
