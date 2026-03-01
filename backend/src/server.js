import express from 'express';

const app = express();

app.listen(5001, () => {
    console.log('Server is running on port 5001');
})

app.get('/api/data', (req, res) => {
    res.status(200).send({ message: 'Co 1 task can lam' });
})

app.post('/api/data', (req, res) => {
    res.status(201).json({ message: 'Nhiệm vụ thêm vào thanh công' });
})

app.put('/api/data/:id', (req, res) => {
    res.status(200).json({ message: 'Nhiệm vụ update thanh công' });
})

app.put('/api/data/:id', (req, res) => {
    res.status(200).json({ message: 'Nhiệm vụ delete thanh công' });
})