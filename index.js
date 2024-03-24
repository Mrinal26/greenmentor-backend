const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mrinalkumar5046:mrinalmongodb1@cluster0.tuntrgh.mongodb.net/taskManagerDB', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
