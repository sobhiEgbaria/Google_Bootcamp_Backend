import os from "os";
import path from "path";
import { fileURLToPath } from "url";

// os examples
const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(uptime);

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.release());

// path examples
console.log(path.sep);

const bookPath = path.join("users", "desktop", "quran.pdf");
console.log(bookPath);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

// read and write fils

import { writeFileSync, readFileSync } from "fs";

writeFileSync("game.txt", "gomo gomo nuuuu");
const text = readFileSync("./game.txt", "utf8");
console.log(text);
