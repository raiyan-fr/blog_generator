const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://api.gemini.com/v1/chat/completions';

app.post('/generate', async (req, res) => {
    const { topic, keywords } = req.body;

    try {
        const prompt = `Write a detailed article about "\${topic}" including \${keywords} keywords. Format the article in Markdown style.`;

        const response = await axios.post(
            GEMINI_API_URL,
            {
                model: "gemini-1.5-pro",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
                max_tokens: 1500
            },
            {
                headers: {
                    'Authorization': `Bearer \${GEMINI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const article = response.data.choices[0].message.content;
        res.json({ article });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate article' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port \${PORT}`);
});
