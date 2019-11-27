const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hellow World');
});

app.listen(3000, () => {
    console.log('run 3000 port');
});