const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(router);


app.listen(8080, () => {

    console.log('API Iniciada');

})