const notes = require('./notes');

// console.log(notes);
// console.log(notes()); // for function received
// console.log(notes.funct()); // when object received

// notes.writeFile("Wrting a file through functions\n");
// notes.readFile();

// console.log(process.env);
// console.log(process.argv);

// process.argv.forEach((val, index) => {
//     console.log(`${index} : ${val}`);
// })

/* var id;
var content;
let args = process.argv.slice(2);
// console.log(args);
args.forEach((item, idx) => {
    itemParts = item.split('=');
    console.log(itemParts);
    if (itemParts[0] == 'id') {
        id = itemParts[1];
    } else if (itemParts[0] == 'content') {
        content = itemParts[1];

    }
});



notes.writeFile(content);
notes.readFile(); */


// to write in JSON objects
let noteToWrite = {}
let args = process.argv.slice(2);
// console.log(args);
args.forEach((item, idx) => {
    itemParts = item.split('=');
    console.log(itemParts);
    if (itemParts[0] == 'id') {
        noteToWrite['id'] = itemParts[1];
    } else if (itemParts[0] == 'content') {
        noteToWrite['content'] = itemParts[1];

    }
});

// notes.writeFile(noteToWrite);
// notes.readFile();

// notes.addNote(noteToWrite);
// notes.showAllNotes();
// notes.removeNote("Note 4");
notes.readNote("Note 3");