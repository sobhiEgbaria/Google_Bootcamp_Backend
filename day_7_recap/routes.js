const routersHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseData = Buffer.concat(body).toString();
      const massage = parseData.split("=")[1];
      res.write(` <h1>your Message is ${massage}</h1>`);
      return res.end();
    });
  }
};

module.exports = { routersHandler };
