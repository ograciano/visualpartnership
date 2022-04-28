const EstudianteService = require("../services/EstudianteService");


class EstudianteController {
    static getEstudiantes(){
        return EstudianteService.getEstudiantes();
    }

    static getEmailForCertificationTrue(){
        return EstudianteService.getEmailForCertificationTrue();
    }

    static getEstudiantesCreditos500() {
        return EstudianteService.getEstudiantesCreditos500();
    }
}

module.exports = EstudianteController;