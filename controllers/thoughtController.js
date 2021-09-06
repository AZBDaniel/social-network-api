const {Thought} = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.findAll()
        .then ((responses)=> {
            res.json(responses)
        })
    },
    getThoughById(req, res) {
        Thought.findById(req.params.id)
        .then ((responses) => {
            res.json(responses)
        })
    },
    createThought(req, res) {
        Thought.create(req.body)
        //need help here
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.id, req.body)
        .then ((responses) => {
            res.json(responses)
        })
    },
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.id)
        .then ((responses) => {
            res.json(responses)
        })
    }

}
