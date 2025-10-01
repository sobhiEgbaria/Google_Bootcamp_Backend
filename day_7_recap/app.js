const http = require("http");
const { routersHandler } = require("./routes");

const server = http.createServer(routersHandler);

server.listen(3000);
