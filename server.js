// create an express app
const express = require("express")
const app = express()

// use the express-static middleware to connect to public
app.use(express.static("public"))

// listen for requests 
app.listen(process.env.PORT || 8000, 
    () => console.log("Server is running..."));

