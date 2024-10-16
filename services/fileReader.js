const fs = require('fs');
const pdfParse = require('pdf-parse');

exports.readPDF = async (path) => {
    const dataBuffer = fs.readFileSync(path);
    return await pdfParse(dataBuffer);
};
