const chalk = require("chalk");
const yargs = require ('yargs');
const notes = require("./notes");

//Customize yargs version
yargs.version('1.1.1');

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title to add",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body to be added",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
});

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder:{
        title: {
            describe: "Note Title to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        console.log("Reading a note!");
    }
});

//Create list command
yargs.command({
    command: "list",
    describe: "List all the notes",
    handler: function(){
        console.log("Listing all notes!");
    }
});

//Yargs will start parsing CLI commands
yargs.parse();