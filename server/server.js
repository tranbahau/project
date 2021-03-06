const express = require('express');
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/routes')

app.use(routes);

app.listen(PORT);
