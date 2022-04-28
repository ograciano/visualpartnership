# Api Visual PartnerShip V1

## Creacion de la carpeta y del repo, archivos readme.md y .gitignore en vs code:
	mkdir visualpartnership
	cd visualpartnership
	git init
## Documentos a ignorar del repositorio
    **/node_modules
	

## Inicializacion del proyecto en node e instalacion de linter
	npm init
	npm install eslint --save-dev
	npm init @eslint/config

## Selecciones para eslint
	problems,
    commonjs,
    none,
    no,
    browser,
    javascript


## Creacion del actions para las pruebas del repositorio
	.github/workflows/test.yml

## Informacion de actions
    name: Run Tests in my project every push on GitHub

    on: [push]

    jobs:
    build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v1
        - name: Run Jest
        uses: stefanoeb/jest-action@1.0.3
	
## creacion de las carpetas app y test
    mkdir app
    mkdir test
##### dentro de las caprpetas generar las subcarpetas lib->util,controllers,services
    mkdir app/lib/controllers
    mkdir app/lib/services
    mkdir app/lib/utils

## Creacion del archivo para emular la base de datos

## instalacion de jest para pruebas
	npm i --save-dev jest
	
## modificacion del package.json
	"test": "node ./node_modules/.bin/jest",
    	"linter": "node ./node_modules/eslint/bin/eslint.js",
    	"linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",
    	"server": "node ./lib/server.js"

## Generacion de la Clase Reader y su prueba

### Clase Reader.js
    const fs = require('fs');

    class Reader {
        static readDocument(documento) {
            return JSON.parse(fs.readFileSync(documento));
        }
    }

    module.exports = Reader;

### Pruebas Clase Reader.test.js
    const Reader = require("../../../app/lib/utils/Reader");

    describe("Unit Test for Reader Class", () => {
        test("Read a document with method fucntion in class Reader", () => {
            const estudiantes = Reader.readDocument("visualpartners.json");
            expect(estudiantes.length).toBe(51);
        });
    });
## generacion de clase de servicio EstudianteService y sus pruebas
### Clase EstudianteService.js
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
### Pruebas Clase EstudianteService.test.js
    const EstudianteService = require("../../../app/lib/services/EstudianteService");

    describe("Unit Test for EstudianteService Class", () => {
        test("consultar la totalidad de estudientes en el documento", () => {
            const estudiantes = EstudianteService.getEstudiantes();
            expect(estudiantes.length).toBe(51);
        });

        test("Creacion de arreglo de emails con haveCertification en true", () => {
            const estudiantes = EstudianteService.getEmailForCertificationTrue();
            expect(estudiantes.length).toBe(29);
        });

        test("consultar estudientes con creditos mayores a 500", () => {
            const estudiantes = EstudianteService.getEstudiantesCreditos500();
            expect(estudiantes.length).toBe(27);
        });
    });
## Generacion de clase de control EstudianteController y sus pruebas
### Clase EstudianteController.js
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

### Pruebas Clase EstudianteController.test.js
    const EstudianteController = require("../../../app/lib/controllers/EstudianteController");


    describe("Unit Test for EstudianteService Class", () => {
        test("consultar la totalidad de estudientes en el documento", () => {
            const estudiantes = EstudianteController.getEstudiantes();
            expect(estudiantes.length).toBe(51);
        });

        test("Creacion de arreglo de emails con haveCertification en true", () => {
            const estudiantes = EstudianteController.getEmailForCertificationTrue();
            expect(estudiantes.length).toBe(29);
        });

        test("consultar estudientes con creditos mayores a 500", () => {
            const estudiantes = EstudianteController.getEstudiantesCreditos500();
            expect(estudiantes.length).toBe(27);
        });
    });

## Instalacion de Express y creacion del archivo server.js
    npm i express --save

    const { request, response } = require("express");
    const express = require("express");
    const EstudianteController = require("./controllers/EstudianteController");

    const app = express();
    app.use(express.json());
    const port = 3000;

    app.get('/v1/visualpartner/estudiantes', (req, res = response) => {
        const estudiantes = EstudianteController.getEstudiantes();
        res.json(estudiantes);
    });

    app.get('/v1/visualpartner/emailcertificados', (req, res = response) => {
        const emailcertificados = EstudianteController.getEmailForCertificationTrue();
        res.json(emailcertificados);
    });

    app.get('/v1/visualpartner/estudiantes500', (req, res = response) => {
        const estudiantes500 = EstudianteController.getEstudiantesCreditos500();
        res.json(estudiantes500);
    });

    app.listen(port, () => console.log(`Visual Partner API in localhost:${port}`));

## Pruebas para postman de los endpoints
    http://localhost:3000/v1/visualpartner/estudiantes
    http://localhost:3000/v1/visualpartner/emailcertificados
    http://localhost:3000/v1/visualpartner/estudiantes500
