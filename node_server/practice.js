const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`
        <html>
        asdfgh
        </html>
        `);
  res.end();
});

server.listen(3001, () => {
  console.log("server running on address http://" + 3001);
});
