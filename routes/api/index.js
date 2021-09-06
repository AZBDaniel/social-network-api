const route = require('express').Router()
const userRoute = require('./user')
const thoughtRoute = require('./thought.js')


route.use('/users', userRoute)
route.use('/thoughts', thoughtRoute)

module.exports = route