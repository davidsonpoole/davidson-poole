const express = require("express")
const os = require("os")
const path = require("path")

const app = express();
app.get("/react", function(req,res) {
    app.send("react.png")
})
app.listen(8080, () => console.log("Listening on port 8080!"))

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "index.html")))
