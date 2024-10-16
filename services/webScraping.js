const axios = require('axios');
const cheerio = require('cheerio');

// Função que faz o scraping
const scrapeSite = async (url) => {
    try {
        // Faz uma requisição GET para o site
        const { data } = await axios.get(url);
        
        // Carrega o HTML do site na cheerio para manipulação
        const $ = cheerio.load(data);
        
        // Extraia os dados que deseja do HTML (exemplo: títulos)
        let resultado = [];
        $('h1, h2, h3').each((i, elem) => {
            resultado.push($(elem).text());
        });
        
        return resultado;  // Retorna os dados extraídos
    } catch (error) {
        console.error('Erro ao realizar o scraping:', error);
        throw new Error('Erro ao realizar o scraping');
    }
};

module.exports = { scrapeSite };
