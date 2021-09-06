const {User} = require('../models')

module.exports = {
    getUsers(req, res) {
        User.findAll()
        .then ((responses)=> {
            res.json(responses)
        })
    },
    createUser(req, res) {
        User.create(req.body)
        .then ((responses) => {
            res.json(responses)
        })
    },
    getUserById(req, res) {
        User.findById(req.params.id)
        .populate('thought').populate('friend')
        .then ((responses) => {
            res.json(responses)
        })
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
        .then ((responses)=> {
            res.json(responses)
        })
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body)
        .then ((responses) => {
            res.json(responses)
        })
    }
}