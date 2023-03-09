const port = process.env.PORT || 3000;
const path = require("path");
const app = require("express")();

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
    console.log("server started");
});