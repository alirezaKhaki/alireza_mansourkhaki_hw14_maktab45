const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')


let json = fs.readFileSync('./users.json')
json = JSON.parse(json);




router.get('/:id', (req, res) => {

    let id = (req.params.id);

    let user_id = json[id]
    res.status(200).render(path.join(__dirname, `../views`, `cardDEtail.ejs`), { user_id })


})



module.exports = router