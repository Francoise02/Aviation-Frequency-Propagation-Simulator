// Declaring variables and improting packages
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const globalErrorHandler = require('./controllers/errorController.js');
const { getAllReceivers, addReceiver, removeReceiver } = require('./controllers/mapController');

dotenv.config();

// Creating an express app
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Creating the routes
app.get("/api/add", getAllReceivers)
app.post("/api/add", addReceiver)
app.delete("/api/remove/:id", removeReceiver)
app.get("/api/map", getAllReceivers)

let port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connecting the environment variables
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(DB).then(() => console.log('Database connected successfully!'));
} else if (process.env.NODE_ENV === 'development') {
  mongoose
    .connect('mongodb://localhost:27017/afps')
    .then(() => console.log('Database connected successfully!'));
}

// Listening to the port
app.listen(3000, () => {
  console.log(`Listening to port ${port}`)
})

app.use(globalErrorHandler);


