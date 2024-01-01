"use strict";
class Note {
    constructor(text) {
        this.id = new Date().toISOString();
        this.text = text;
    }
    show() {
        console.log(this.text);
    }
    edit(newText) {
        this.text = newText;
    }
}
class Setting {
    constructor() {
        this.password = null;
        this.theme = "LIGHT";
        this.fontSize = 14;
    }
    validatePassword(password) {
        if (password.length < 8) {
            return false;
        }
        else if (password.length > 32) {
            return false;
        }
        else {
            return true;
        }
    }
    changePassword(newPassword) {
        if (this.validatePassword(newPassword)) {
            this.password = newPassword;
        }
    }
    toggleTheme() {
        if (this.theme === "LIGHT") {
            this.theme = "DARK";
        }
        else {
            this.theme = "LIGHT";
        }
    }
    changeFontSize(newFontSize) {
        if (newFontSize < 8) {
            this.fontSize = 8;
        }
        else if (newFontSize > 60) {
            this.fontSize = 60;
        }
        else {
            this.fontSize = Math.floor(newFontSize);
        }
    }
}
class Notebook {
    constructor() {
        this.notes = [];
        this.setting = new Setting();
    }
    getNoteById(noteId) {
        return this.notes.find(({ id }) => id === noteId);
    }
    createNewNote(newNote) {
        this.notes.push(newNote);
    }
    deleteAllNotes() {
        this.notes.length = 0;
    }
    deleteNote(noteId) {
        const targetNote = this.getNoteById(noteId);
        const targetNoteIndex = this.notes.indexOf(targetNote);
        this.notes.splice(targetNoteIndex, 1);
    }
}
