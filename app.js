const express = require('express');
const bodyParser = require('body-parser');
// const mongoPratice = require('./mongo'); ini call db with mongo
const mongoPratice = require('./mongoose'); // ini call db with mongoose

const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPratice.createProduct);

app.get('/products', mongoPratice.getProducts);

app.listen(3000);