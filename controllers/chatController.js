const axios = require('axios');

exports.fazerPergunta = async (req, res) => {
    const { pergunta } = req.body;  // Captura a pergunta do corpo da requisição
    try {
        const resposta = await axios.post('URL_DA_API_NLP', { prompt: pergunta });  // Envia a pergunta para a API de NLP
        res.json(resposta.data);  // Retorna a resposta da API de NLP
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao processar a pergunta' });  // Retorna erro se a API falhar
    }
};
