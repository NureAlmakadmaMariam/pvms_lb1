const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post('/longest-word', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const longestWord = words.reduce((longest, current) =>
        current.length > longest.length ? current : longest, '');

    res.json({ longestWord });
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
