const axios = require('axios');

exports.fazerPergunta = async (req, res) => {
    const { pergunta } = req.body;
    try {
        const resposta = await axios.post('URL_DA_API_NLP', { prompt: pergunta });
        res.json(resposta.data);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao processar a pergunta' });
    }
};
