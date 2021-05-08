// npm run devStart

const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express() 

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles' ,articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'First article',
        created: new Date(),
        description: 'This is a description hehehe'
    },
    {
        title: 'Second article',
        created: new Date(),
        description: 'This is a new description hehehe'
    }]
    res.render('articles/index', {articles: articles})
})

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

app.listen(5000)
