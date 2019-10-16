const knex = require('../db/knex')

//will query the users table for all users
exports.getUsers = function (req, res) {
    knex('users')
        .then(users => res.json(users))
}

//will query the users table and return the user with the id matching req.params.id
exports.getOneUser = function (req, res) {
    knex('users')
        .where('id', req.params.id)
        .then(users => res.json(users))
}

exports.addUser = function (req, res) {
    knex('users')
        .insert({
            ...req.body, 
            created_at: new Date()
        })
        .returning('*')
        .then(newUser => res.json(newUser))
}

exports.updateUser = function (req, res) {
    knex('users')
        .update(req.body)
        .where('id', req.params.id)
        .returning('*')
        .then(updateUser => res.json(updateUser))
}
