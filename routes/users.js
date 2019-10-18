const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

//when a get request is received with the endpoint of /users, will apply getUsers function from the usersController file
router.get('/users', usersController.getUsers)

//when a get request is received with the endpoint of /users/:id, will apply getOneUser function from the usersController file
router.get('/users/:id', usersController.getOneUser)

//when a post request is received with the endpoint of /users, will apply addUser function from the usersController file
router.post('/users', usersController.addUser)

//when a patch request is received with the endpoint of /users/:id, will apply updateUser function from the usersController file
router.patch('/users/:id', usersController.updateUser)

//when a delete request is received with the endpoint of /users/:id, will apply deleteUser function from the usersController file
router.delete('/users/:id', usersController.deleteUser)

//exports this file for use by other files as an instance of an express.Router()
module.exports = router