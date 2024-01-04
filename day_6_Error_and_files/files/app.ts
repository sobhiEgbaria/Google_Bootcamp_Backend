import * as fs from 'fs';
// File path for the read and write operations
const fileIn = 'file1.txt';
// const filePath = 'file1.txt';

function writeFile(filePath: string, content: string): void {
  fs.writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
      console.error('Error writing to file asynchronously:', error);
    } else {
      console.log('File writing successful.');
    }
  });
}

// Function to write content to a file synch
function writeFileSync(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, {
    flag: "w"
  })
}

function readFile(filePath: string): void {
  fs.readFile(filePath, 'utf-8', (error, fileContent) => {
    if (error) {
      console.error('Error reading file asynchronously:', error);
    } 
    console.log('File Content:', fileContent);
  });
}
// Function to read content to a file synch
function readFileSync(filePath: string): string {
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
let content = readFileSync(fileIn)
console.log("File Content:" + content)




















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