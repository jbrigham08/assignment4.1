const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');

const server = http.createServer((req, res) => {

    let address = req.url;
    let q = url.parse(address, true).query;
    let pathname = url.parse(address).pathname;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (address.startsWith('/products')) {
        res.write(`This is the ${pathname} page!\n`);

            if (q.search.toLowerCase() === "eggs" || 
                q.search.toLowerCase() === "milk" || 
                q.search.toLowerCase() === "cheese" || 
                q.search.toLowerCase() === "pork" || 
                q.search.toLowerCase() === "shrimp" || 
                q.search.toLowerCase() === "chicken") {
                    res.write(`Product ${q.search} found`);
            } else {
                res.write(`Product ${q.search} not found`);
            }
    
    } else if (address.startsWith('/profile')) {
        res.write(`This is the ${pathname} page!`);
    } else if (address.startsWith('/cart')) {
        res.write(`This is the ${pathname} page!`);
    } else if (address.startsWith('/register')) {
        res.write(`This is the ${pathname} page!`);
    } else if (address.startsWith('/login')) {
        res.write(`This is the ${pathname} page!`);
    } else if (address === '/') {
        res.write(`This is the home page!`);
    } else {
        res.write(`Houston we have a problem`);
    }
    res.end();
  });


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })