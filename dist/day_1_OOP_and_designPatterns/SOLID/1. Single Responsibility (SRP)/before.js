"use strict";
class Notebook {
    constructor() {
        this.notes = [];
        this.password = "";
        this.theme = "LIGHT";
        this.fontSize = 14;
    }
    createNewNote(text = "") {
        const newNote = { id: new Date().toISOString(), text };
        this.notes.push(newNote);
    }
    deleteAllNotes() {
        this.notes.length = 0;
    }
    deleteNote(noteId) {
        const targetNote = this.notes.find(({ id }) => id === noteId);
        const targetNoteIndex = this.notes.indexOf(targetNote);
        this.notes.splice(targetNoteIndex, 1);
    }
    showNote(noteId) {
        const targetNote = this.notes.find(({ id }) => id === noteId);
        console.log(targetNote.text);
    }
    editNote(noteId, newText) {
        const targetNote = this.notes.find(({ id }) => id === noteId);
        const targetNoteIndex = this.notes.indexOf(targetNote);
        this.notes[targetNoteIndex].text = newText;
    }
    changePassword(newPassword) {
        if (newPassword.length >= 8 && newPassword.length <= 32) {
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
