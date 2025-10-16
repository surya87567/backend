const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Complete Coding</title>
                </head>
                <body>
                    <h1>Enter Your details:</h1>
                    <form action="submit-details" method="POST">
                        <input type="text" name="username" placeholder="Enter your name : " /><br/>
                        <label for="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <input type="submit" value="Submit"/>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Complete Coding</title>
            </head>
            <body>
                <h1>Like / Share / Subscribe</h1>
            </body>
        </html>
    `);
    res.end();
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
