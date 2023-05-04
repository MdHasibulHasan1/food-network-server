const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const foods = require('./data/foods.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The server is running')
});



app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})
