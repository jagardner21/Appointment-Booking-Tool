const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const cors = require('cors');
const logger = require('morgan');
const users = require('./routes/users')
const appointments = require('./routes/appointments')

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/appointment-booking-tool', index);
app.use('/api/appointment-booking-tool', users);
app.use('/api/appointment-booking-tool', appointments);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
