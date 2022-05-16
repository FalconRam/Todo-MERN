const express = require('express')
const Task = require('../models/models')

const router = express.Router()

router.get('/', (req, res) => {
    Task.find((err, docs) => {
        if (err) console.log(err)
        res.json(docs)
    })
})

router.post('/', (req, res) => {
    const task = new Task(req.body)
    task.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.put('/:id', (req, res) => {
    Task.findOneAndUpdate({
        _id : req.params.id
    }, req.body, {
        new : true
    }, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.put('/:id', (req, res) => {
    Task.findOneAndDelete(req.params.id,
        (err, docs) => {
            if (err) console.log(err)
            res.json(docs)
    })
})

module.exports = router