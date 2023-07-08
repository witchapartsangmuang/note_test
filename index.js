let express = require('express')
let app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    return res.send({
        message: 'hi'
    })
})
app.listen(8000, () => {
    console.log('server is running')
})