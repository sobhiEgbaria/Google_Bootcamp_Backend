"use strict";
class AddTextCommand {
    constructor(editor, text) {
        this.editor = editor;
        this.text = text;
    }
    execute() {
        this.prevText = this.editor.content;
        this.editor.content += this.text;
    }
    undo() {
        this.editor.content = this.prevText;
    }
}
class DeleteTextCommand {
    constructor(editor) {
        this.editor = editor;
    }
    execute() {
        this.prevText = this.editor.content;
        this.editor.content = "";
    }
    undo() {
        this.editor.content = this.prevText;
    }
}
class TextEditor {
    constructor() {
        this.content = "";
    }
}
class CommandInvoker {
    constructor() {
        this.commandHistory = [];
        this.currentCommandIndex = -1;
    }
    executeCommand(command) {
        if (this.currentCommandIndex < this.commandHistory.length - 1) {
            this.commandHistory = this.commandHistory.slice(0, this.currentCommandIndex + 1);
        }
        command.execute();
        this.commandHistory.push(command);
        this.currentCommandIndex++;
    }
    undo() {
        if (this.currentCommandIndex >= 0) {
            const command = this.commandHistory[this.currentCommandIndex];
            command.undo();
            this.currentCommandIndex--;
        }
        else {
            console.log("Nothing to undo.");
        }
    }
    redo() {
        if (this.currentCommandIndex < this.commandHistory.length - 1) {
            const command = this.commandHistory[this.currentCommandIndex + 1];
            command.execute();
            this.currentCommandIndex++;
        }
        else {
            console.log("Nothing to redo.");
        }
    }
}
// Client Code
const editor = new TextEditor();
const invoker = new CommandInvoker();
const addTextCmd = new AddTextCommand(editor, "Hello, World!");
invoker.executeCommand(addTextCmd);
console.log(editor.content); // "Hello, World!"
const deleteTextCmd = new DeleteTextCommand(editor);
invoker.executeCommand(deleteTextCmd);
console.log(editor.content); // ""
invoker.undo();
console.log(editor.content); // "Hello, World!"
invoker.redo();
console.log(editor.content); // ""
