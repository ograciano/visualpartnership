const { request, response } = require("express");
const express = require("express");
const EstudianteController = require("./controllers/EstudianteController");

const app = express();
app.use(express.json());
const port = 3000;

// app.get("/", (req, res = response) => {
//     res.json({ msg: "Fizzbuzz api Welcome" });
// });

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