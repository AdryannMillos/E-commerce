import express from 'express';

import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server returned')
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

const port = process.env.Port || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
