const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    const html = `
      <html>
        <head><title>Complete Coding</title></head>
        <body>
          <h1>Enter Your details: </h1>
          <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter your name : " /><br/>
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female" />
            <br/><input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    `;
    return res.end(html);
  }

  else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const params = new URLSearchParams(parsedBody);
      const bodyObject = Object.fromEntries(params);

      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // Default response
  res.setHeader("Content-Type", "text/html");
  const defaultHtml = `
    <html>
      <head><title>Complete Coding</title></head>
      <body><h1>Like / Share / Subscribe</h1></body>
    </html>
  `;
  res.end(defaultHtml);
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
