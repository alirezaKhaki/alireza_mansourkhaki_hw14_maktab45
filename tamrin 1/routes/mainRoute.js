const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')


let json = fs.readFileSync('./users.json')
json = JSON.parse(json);




router.get('/:id', (req, res) => {

    res.render(path.join(__dirname, `../views`, `${req.params.id}`), { json })
})


module.exports = router