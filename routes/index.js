const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { scrapeSite } = require('../services/webScraping');

// Rota para fazer perguntas ao modelo (NLP)
router.post('/perguntar', chatController.fazerPergunta);

// Rota para realizar web scraping
router.post('/scraping', async (req, res) => {
    const { url } = req.body;
    try {
        const dados = await scrapeSite(url);
        res.json({ dados });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar o scraping' });
    }
});

module.exports = router;
