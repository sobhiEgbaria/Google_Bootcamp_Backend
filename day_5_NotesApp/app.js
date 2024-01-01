// require is the old way to import. the new way is import and export
const fs = require("fs"); // node js module
const notes = require("./notes.js"); // module by me
const validator = require("validator"); // npm module
const yargs = require("yargs"); // npm module
const { argv } = require("process");

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
    console.log(argv.title, argv.body);
  },
});

// remove note by title
yargs.command({
  command: "remove",
  description: "remove note by title",
  handler: () => {
    console.log("remove is done");
  },
});

// read not by title
yargs.command({
  command: "read",
  description: "read a note by title",
  handler: () => {
    console.log("read is done");
  },
});

// print all the notes
yargs.command({
  command: "list",
  description: "list an all notes",
  handler: () => {
    console.log("listing is done");
  },
});

yargs.parse();
