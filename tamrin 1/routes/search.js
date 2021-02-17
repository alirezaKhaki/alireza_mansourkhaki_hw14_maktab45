const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());



let json = fs.readFileSync('./users.json')
json = JSON.parse(json);




let found = []
router.post('/', (req, res) => {
    let data = (req.body.data);
    found = []

    json.findIndex(i => {

        if (i.first_name.includes(data) || i.email.includes(data) || i.last_name.includes(data) || i.id.includes(data)) {
            found.push(i)
        }

    })

    if (found.length > 0) {
        res.send(found)
    } else {
        res.send(false)
    }

})

router.get('/:id', (req, res) => {


    let id = req.params.id
    if (id === 'found') {
        res.status(200).render(path.join(__dirname, `../views`, `${id}`), { found })
    } else if (id === 'NotFound') {
        res.status(404).render(path.join(__dirname, `../views`, `NotFound.ejs`))
    }

})


module.exports = router