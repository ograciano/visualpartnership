const Reader = require("../../../app/lib/utils/Reader");

describe("Unit Test for Reader Class", () => {
    test("Read a document with method fucntion in class Reader", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const estudiantes = Reader.readDocument("visualpartners.json");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(estudiantes.length).toBe(51);
    });
});