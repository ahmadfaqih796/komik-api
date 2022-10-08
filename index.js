const { config } = require("dotenv");
let express = require("express");
let controllers = require("./controllers");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();

config();

app.use(cors())

app.use(bodyParser.json());
controllers(app);
const PORT = 3001;

app.listen(PORT);
