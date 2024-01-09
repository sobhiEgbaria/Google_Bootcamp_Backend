"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// File path for the read and write operations
const fileIn = 'file1.txt';
// const filePath = 'file1.txt';
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf-8', (error) => {
        if (error) {
            console.error('Error writing to file asynchronously:', error);
        }
        else {
            console.log('File writing successful.');
        }
    });
}
// Function to write content to a file synch
function writeFileSync(filePath, content) {
    fs.writeFileSync(filePath, content, {
        flag: "w"
    });
}
function readFile(filePath) {
    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) {
            console.error('Error reading file asynchronously:', error);
        }
        console.log('File Content:', fileContent);
    });
}
// Function to read content to a file synch
function readFileSync(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
// ************* Example usage *************//
// write to file asynch
const contentToWrite = 'Hello there!';
// writeFile(fileIn, contentToWrite)
// write to file synch
// writeFileSync(fileIn, contentToWrite)
// read to file asynch
// readFile(fileIn)
// read to file synch
let content = readFileSync(fileIn);
console.log("File Content:" + content);
// .then(() => readFile(filePath))
// .then((readContent) => console.log('Read content:', readContent))
// .catch((error) => console.error('Error:', error));
// // Function to write content to a file
// function writeFile(filePath: string, content: string): Promise<void> {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, content, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         console.log(`Content has been written to ${filePath}`);
//         resolve();
//       }
//     });
//   });
// }
// // Function to read content from a file
// function readFile(filePath: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         console.log(`Content read from ${filePath}: ${data}`);
//         resolve(data);
//       }
//     });
//   });
// }
