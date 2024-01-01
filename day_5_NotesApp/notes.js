const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  if (!duplicateNote) {
    const newNote = {
      title: title,
      body: body,
    };
    saveNotes([...notes, newNote]);
  } else {
    console.log("sorry the note is taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesAfterRemove = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes([...notesAfterRemove]);
};

const findNoteByTitle = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => {
    return note.title === title;
  });

  if (note) {
    return console.log(`you note is \ntitle: ${note.title} body: ${note.body}`);
  }
  return console.log("note NOT found");
};

const loadNotes = () => {
  try {
    const dataJson = fs.readFileSync("notes_json").toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes_json", notesJson);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  loadNotes: loadNotes,
  findNoteByTitle: findNoteByTitle,
};
