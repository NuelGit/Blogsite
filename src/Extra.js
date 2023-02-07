app.post('/hello', (req, res) =>{
    res.send(`Hello Mr ${req.body.name}!!!`)
    
})

app.get('/hello/:name', (req, res) =>{
    
    const { name } = req.params
    res.send(`Hello ${name} Nweke!!`)
})