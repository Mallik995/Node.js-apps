/* // console.log('1');
console.log("starting Node");


setTimeout(() => {
    console.log("In set Time Out ....")
}, 1000);

console.log("Ending  Node"); */
// ********************* wrting in creating , writing ina file ****************
/* const fs = require('fs');

let content = "Newton School \n";

fs.writeFile("./notes.txt", content, { flag: 'a+' }, err => {
    if (err) {
        console.log(err);
    }
}) */

//Read file
/* fs.readFile("./notes.txt", "utf8", (err, data) => {
    if (err && err.code == "ENOENT") {
        console.log("File doesn't Exists");
    } else {
        console.log(data);
    }
}) */


// ************** creating and exporting module ******************//

/* const content = "100";

// module.exports = content;

// creating functing and exporting

function fun() {
    console.log(`content is ${content}`);
}

// module.exports = fun; // if function is exporting

module.exports = {
    funct: fun
} */

// ****************** read -write a file through function ********************//


/* const fs = require('fs');
const chalk = require("chalk");
function readFile() {
    fs.readFile("./notes.txt", "utf8", (err, data) => {
        if (err && err.code == "ENOENT") {
            console.log(chalk.red.inverse("File doesn't Exists"));
        } else {
            console.log(chalk.yellowBright.inverse(data));
        }
    })
}

function writeFile(content) {
    // fs.writeFile("./notes.txt", content, { flag: 'a+' }, err => { // to add new contents along with older contents in notes.txt file
    // fs.writeFile("./notes.txt", content, err => { // to add or show only new contents in notes.txt file
    fs.writeFile("./notes.txt", JSON.stringify(content), err => { // to add content in JSON objects in notes.txt file
        if (err) {
            console.log(err);
        }
    })

}

module.exports = {
    readFile: readFile,
    writeFile: writeFile
}
 */


/*********************************************************************** */
const fs = require('fs');
const chalk = require("chalk");
/*
 1. add a note [id , body]
2. removing an note[id]
3. show a noted [id]
4.read a note [id] 
*/
const filename = './notes.json';

function readNote(id) {
    let notes = loadNotes();
    note = notes.find((note) => note.id == id);
    console.log(chalk.cyanBright(note.content));
}

function removeNote(id) {
    let notes = loadNotes();
    let filteredNotes = notes.filter(note => note.id != id);
    if (notes.length == filteredNotes.length) {
        console.log(chalk.red("Note not found!!!"));
        return;
    }
    saveNotes(filteredNotes);
    console.log(chalk.green("Note deleted successfully.....!!!!"));

}

function showAllNotes() {
    let notes = loadNotes();
    console.log(chalk.blue.inverse("Showing all notes...."));
    notes.forEach(note => {
        console.log(chalk.yellow.inverse(`${note.id}`));
    })

}
// showAllNotes();

// add notes to the "notes.json" file
function addNote(note) {
    let allNotes = loadNotes();
    allNotes = [...allNotes, note];
    saveNotes(allNotes);
}
// addNote({ "id": "Note 4", "content": "This is 4th note" })

//saves list of notes and appending notes into "notes.json" file
function saveNotes(notes) {

    let notesJson = JSON.stringify(notes);
    fs.writeFileSync(filename, notesJson)
}
// var notes = loadNotes();
// notes = notes.concat([{ id: "Note 3", content: "This is 3rd note" }]);
// console.log(notes);
// saveNotes(notes);


// read from notes.json and return the notes as list

function loadNotes() {
    let dataBuffer = fs.readFileSync(filename);
    let dataString = dataBuffer.toString();
    return JSON.parse(dataString);
}
// console.log(loadNotes());

module.exports = {
    showAllNotes: showAllNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}