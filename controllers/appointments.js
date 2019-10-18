const knex = require('../db/knex')

//will query the users table for all appointments
exports.getAppointments = function (req, res) {
    knex('appointments')
        .then(appointments => res.json(appointments))
}

//will query the appointment table and return the user with the id matching req.params.id
exports.getOneAppointment = function (req, res) {
    knex('appointments')
        .where('id', req.params.id)
        .then(appointment => res.json(appointment))
}

//will add an appointment to the appoinments table
exports.addAppointment = function (req, res) {
    knex('appointments')
        .insert({
            ...req.body, 
            completed: false
        })
        .returning('*')
        .then(newAppointment => res.json(newAppointment))
}

//will update the desired appointment with details specified in the request body
exports.updateAppointment = function (req, res) {
    knex('appointments')
        .update(req.body)
        .where('id', req.params.id)
        .returning('*')
        .then(updatedAppointment => res.json(updatedAppointment))
}

//will update the completed key for the desired appointment to "true"
exports.markAppointmentComplete = function (req, res) {
    knex('appointments')
        .update({
            completed: true
        })
        .where('id', req.params.id)
        .returning('*')
        .then(completedAppointment => res.json(completedAppointment))
}

//will delete the specified appointment from the appointments table
exports.deleteAppointment = function (req, res) {
    knex('appointments')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(deletedAppointment => res.json(deletedAppointment))
    }