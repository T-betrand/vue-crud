const express = require("express")
const serveStatic = require("serve-static");
const path = require('path');

// (serveStatic(path.join(__dirname, 'dist')))
// console.log(express.use)
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);

console.log(app.listen(port))
