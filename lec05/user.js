const fs = require("fs");

const requestHandler=(req, res) => {
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
      // Convert object to string
  const dataToWrite = JSON.stringify(bodyObject) + "\n"; // Add newline

  // Append to file instead of overwriting
  fs.appendFileSync("user.txt", dataToWrite, "utf8");
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
};

module.exports=requestHandler;