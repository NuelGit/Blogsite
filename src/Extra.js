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
    
    const { name } = req.params
    res.send(`Hello ${name} Nweke!!`)
})