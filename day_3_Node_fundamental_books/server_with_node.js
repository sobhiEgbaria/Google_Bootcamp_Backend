// run server with node js

import http from "http";

const port = 3000;

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>home</h1>");
    res.end();
  }
  if (req.url === "/logo") {
    res.write("<h1>logo</h1>");
    res.end();
  }
});

app.listen(port, () => {
  console.log(`the server run in port ${port}`);
});
