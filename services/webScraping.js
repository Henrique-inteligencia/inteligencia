const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeSite = async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const scrapedData = $('seletor-do-dado').text();
    return scrapedData;
};
