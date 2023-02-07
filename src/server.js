import express from 'express'

const app = express()
app.use(express.json())

let articlesInfor = [{

    name: 'learn-react',
    upvotes: 0,
   },

{
    name: 'learn-node',
    upvotes: 0,
},

{
    name: 'mongoDb',
    upvotes: 0,
}]

app.put('/api/articles/:name/upvote', (req, res) =>{
    const {name} = req.params
    const article = articlesInfor.find(a => a.name ===name)
    if(article){
        article.upvotes += 1
        res.send(`The ${name} article now has ${article.upvotes} upvotes`)
    }else {
        res.send("doesn't exist ")
    }
})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
})
