const fs = require("fs");

const getNotes = function() {
  return "Your notes...";
};

//Adding a note to the notes array
const addNote = function(title, body) {

  const notes = loadNotes();
  
  notes.push({
      title: title,
      body: body
  })

  saveNotes(notes);

};


//Save data from array to JSON file
const saveNotes = function(notes){
    const dataString = JSON.stringify(notes);
    fs.writeFileSync('storage.json',dataString);
}


//Loads all notes from storage.json and returns an array
const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("storage.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString); //JSON.parse gives an array
  } catch (err) {
      return [];
  }
};


module.exports = {
  getNotes: getNotes,
  addNote: addNote
};