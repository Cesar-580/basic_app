const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello word");
});

app.get('/date', (req,res) =>{
    res.send(`Date is ${(new Date()).toLocaleDateString("es-CO")}`)
})

app.listen(port, () => {
    console.log(`runing on localhost:${3000}`)
});