import express from 'express'

   let articlesInfor = [{

    name: 'Learn-React',
    upvotes: 0,
   },

{
    name: 'Lear-Node',
    upvotes: 0,
},

{
    name: 'Lear-MongoDb',
    upvotes: 0,
}]

    const app = express()
    app.use(express.json())
app.get('api/articles/:name/upvote', (req, res) =>{
    const {name} = req.params
    const article = articlesInfor.find(a => a.name ===name)
    if(article){
        article.upvotes += 1
        res.send(`The ${name} article now has ${article.upvotes} upvotes`)
    }else {
        res.send("doesn't exist ")
    }
    
    app.listen(8000, ()=>{
        console.log('Server listening on port 8000')
    })
})