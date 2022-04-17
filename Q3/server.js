 const express = require("express")

const app = express()
const port = 3000
//app.set('view engine', 'ejs') is self-explanatory. We are setting EJS as the Express app view engine
app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]
const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}
app.get('/', (req, res) => {
   // In res.render('pages/index'), we are calling the render method on the response object
    res.render('pages/index', {
        user,
        title: "Home Page"

    })
})
app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"

    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        articles: posts,
        title: "About"

    })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})