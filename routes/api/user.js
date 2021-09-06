const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('../../controllers/userController')

const router = require('express').Router()

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)
router.route('/:userId/friends/:friendId').post().delete()

module.exports = router