const { getThoughts, createThought, getThoughById, updateThought, deleteThought } = require('../../controllers/thoughtController')
const { route } = require('./user')

const router = require('express').Router()

router.route('/').get(getThoughts).post(createThought)
router.route('/:id').get(getThoughById).put(updateThought).delete(deleteThought)
router.route('/:thoughtId/reaction').post().delete()






module.exports = router