const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const foods = require('./data/foods.json');
const specials = require('./data/specials.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The server is running')
});

app.get('/foods', (req, res) => {
    res.send(foods);
})
app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/specials', (req, res) => {
    res.send(specials);
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})
