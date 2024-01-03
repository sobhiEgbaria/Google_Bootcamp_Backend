// require is the old way to import. the new way is import and export
const notes = require("./notes.js"); // module by me
const yargs = require("yargs"); // npm module

// add new note
yargs.command({
  command: "add",
  description: "adding a new note",
  builder: {
    title: {
      description: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// remove note by title
yargs.command({
  command: "remove",
  description: "remove note by title",
  builder: {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// read not by title
yargs.command({
  command: "read",
  description: "read a note by title",
  builder: {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.findNoteByTitle(argv.title);
  },
});

// print all the notes
yargs.command({
  command: "list",
  description: "list an all notes",
  handler: () => {
    console.log(notes.loadNotes());
  },
});

yargs.parse();
