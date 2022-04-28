const EstudianteController = require("../../../app/lib/controllers/EstudianteController");


describe("Unit Test for EstudianteService Class", () => {
    test("consultar la totalidad de estudientes en el documento", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const estudiantes = EstudianteController.getEstudiantes();
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(estudiantes.length).toBe(51);
    });

    test("Creacion de arreglo de emails con haveCertification en true", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const estudiantes = EstudianteController.getEmailForCertificationTrue();
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(estudiantes.length).toBe(29);
    });

    test("consultar estudientes con creditos mayores a 500", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const estudiantes = EstudianteController.getEstudiantesCreditos500();
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(estudiantes.length).toBe(27);
    });
});