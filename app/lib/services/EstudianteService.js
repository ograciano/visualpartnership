const Reader = require("../utils/Reader");

class EstudianteService {
    static getEstudiantes(){
        return Reader.readDocument('visualpartners.json');
    }
    
    static getEmailForCertificationTrue(){
        const estudiantes = Reader.readDocument('visualpartners.json');
        const estudiantesCertificados = estudiantes.filter( estudiante => estudiante.haveCertification === true);
        const emailCertificados = estudiantesCertificados.map(estudiante => estudiante.email);
        return emailCertificados;
        
    }
    
    static getEstudiantesCreditos500() {
        const estudiantes = Reader.readDocument('visualpartners.json');
        const estudiantes500 = estudiantes.filter(estudiante => estudiante.credits > 500);
        return estudiantes500;
    }
}

module.exports = EstudianteService;