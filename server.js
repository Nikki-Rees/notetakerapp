// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");


// Set the port 
const PORT = process.env.PORT || 8080;

// Create express app instance.
const app = express();


//set-up epress app to handle data parsing
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});
