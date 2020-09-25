const express = require('express')
const router = express.Router()
const Items = require('../models/itemSchema')

router.get('/', (req, res) => {
    Items.find({}, (err, items) => {
        res.json(items)
    })
})
router.use('/:id', (req, res, next) => {
    console.log(req.params.id)
    Items.findById(req.params.id, (err, item) => {
        if(err)
            res.status(500).send(err)
        else 
            req.item = item 
            next()
    })
})
router
    .get('/:id', (req, res) => {
        return res.json( req.item )
    })
    .put('/:id', (req, res) =>{
        Object.keys(req.body).map(key=>{
            req.item[key] = req.body[key]
        })
        req.item.save()
        res.json(req.item)
    })
module.exports = router;