const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body><h1>User Input </h1>");

    res.write('<form action="/submit" method="POST" >');

    res.write(
      '<input type="text" name="name" placeholder="Enter your Name" /> '
    );

    res.write('<button type="submit" name="btn" >Submit</button> ');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync("userinput.txt", JSON.stringify(bodyObj));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server started running on port: ${PORT}`);
});
