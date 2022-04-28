const fs = require('fs');

class Reader {
    static readDocument(documento) {
        return JSON.parse(fs.readFileSync(documento));
    }
}

module.exports = Reader;