const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

//Adding a note to the notes array
// sample comment
//sample comment 2
//sample comment 3
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.yellowBright.bgGreen.bold("Note added!"));
  } else {
    console.log(chalk.white.bgRed.bold("Note already exists!"));
  }
};

//Save data from array to JSON file
const saveNotes = function (notes) {
  const dataString = JSON.stringify(notes);
  fs.writeFileSync("storage.json", dataString);
};

//Loads all notes from storage.json and returns an array
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("storage.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString); //JSON.parse gives an array
  } catch (err) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const newNotes = notes.filter(function (note) {
    if (note.title !== title) {
      return true;
    } else {
      console.log(chalk.white.bgRed.bold(title + " was removed"));
      return false;
    }
  });

  if (notes.length === newNotes.length)
    console.log(chalk.white.bgGray.bold("No such note was found."));

  saveNotes(newNotes);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
