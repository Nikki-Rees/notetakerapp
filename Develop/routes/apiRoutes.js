// LOADING data from the database
const fs = require("fs")
const notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');


function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, err => {
        if (err) {
            throw err;
        }
        console.log("Success");
    });
}
//ROUTES

module.exports = (app) => {
    //GET routes for notes
    app.get("/api/notes", (req, res) => {
        res.json(notesData);
    });

    //POST route for notes
    app.post("/api/notes", (req, res) => {
        let id = uuidv4();
        let title = req.body.title;
        let text = req.body.text;
        notesData.push({ id: id, title: title, text: text });
        writeToFile("./db/db.json", JSON.stringify(notesData));
        console.log("Notes added to database: " + notesData);
        res.json(true);
    });

    //DELETE route for notes
    app.delete("/api/notes/:id", (req, res) => {
        let noteToDelete = req.params.id;

        for (let i = 0; i < notesData.length; i++) {
            if (notesData[i].id == noteToDelete) {
                notesData.splice(i, 1);
            }
        }
        writeToFile("./db/db.json", JSON.stringify(notesData));
        res.json(notesData);
        console.log("Note deleted")

    });

};