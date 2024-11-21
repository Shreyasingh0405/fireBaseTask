const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
