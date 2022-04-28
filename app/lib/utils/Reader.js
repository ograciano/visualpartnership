const fs = require('fs');

class Reader {
    static readDocument(documento) {
        return fs.readFileSync(documento);
    }
}

module.exports = Reader;