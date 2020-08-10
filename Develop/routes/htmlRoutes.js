// DEPENDENCY - path to get the correct file path for our html

const path = require("path");

//ROUTES
//Code allows user handles what the user is shown when visiting a page
module.exports = (app) => {

    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    //if no matching route is found then app defaults to index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

};
