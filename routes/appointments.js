const express = require('express')
const router = express.Router()
const appointmentsController = require('../controllers/appointments')

//when a get request is received with the endpoint of /appointments, will apply getAppointments function from the appointmentsController file
router.get('/appointments', appointmentsController.getAppointments)

//when a get request is received with the endpoint of /appointments/:id, will apply getOneAppointment function from the appointmentsController file
router.get('/appointments/:id', appointmentsController.getOneAppointment)

//when a post request is received with the endpoint of /appointments, will apply addAppointment function from the appointmentsController file
router.post('/appointments', appointmentsController.addAppointment)

//when a patch request is received with the endpoint of /appointments/:id, will apply updateAppointment function from the appointmentsController file
router.patch('/appointments/:id', appointmentsController.updateAppointment)

//when a patch request is received with the endpoint of /appointments/:id/completed, will apply markAppointmentComplete function from the appointmentsController file
router.patch('/appointments/:id/completed', appointmentsController.markAppointmentComplete)

//when a delete request is received with the endpoint of /appointments/:id, will apply deleteAppointment function from the appointmentsController file
router.delete('/appointments/:id', appointmentsController.deleteAppointment)

//exports this file for use by other files as an instance of an express.Router()
module.exports = router