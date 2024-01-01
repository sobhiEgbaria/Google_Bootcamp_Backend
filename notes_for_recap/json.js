const fs = require("fs");

// const dataBuffer = fs.readFileSync('1-json.json') // // read data from json fail as buffer(numbers)
// const dataJSON = dataBuffer.toString() // // convert the buffer data to string
// const user = JSON.parse(dataJSON) // // convert the string to obj

// // assign a new values to the obj.
// user.name = 'Gunther'
// user.age = 54

// const userJSON = JSON.stringify(user) // // convert the obj to json string
// fs.writeFileSync('1-json.json', userJSON) // // write the string to the file

const dataJson = fs.readFileSync("1-json.json").toString();
const data = JSON.parse(dataJson);

data.name = "sobhi";
data.age = 22;

const newData = JSON.stringify(data);
fs.writeFileSync("1-json.json", newData);
