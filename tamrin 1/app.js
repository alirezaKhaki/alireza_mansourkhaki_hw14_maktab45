const express = require('express')
const app = express()
const path = require('path')


const mainRoute = require('./routes/mainRoute')
const detail = require('./routes/detail')
const post = require('./routes/search')

app.use("/", express.static('./views'));


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', mainRoute)
app.use('/cardDetail', detail)
app.use('/search', post)

app.listen(5000, () => {
    console.log("server is running on port 5000");
})