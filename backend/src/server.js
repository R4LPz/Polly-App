const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes.js')
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))
app.use(routes)
app.use('/uploads', express.static('uploads'))

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

const port = process.env.PORT || '5000'; 
app.listen(port);
console.log(`Listening on port ${port}`);

