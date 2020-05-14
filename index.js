/* 
HTTP basicos de una REST
GET -se utiliza para traer datos
POST - Se utiliza para crear datos
PUT - Se utiliza para modificar datos
DELETE - Se utiliza para borrar datos
COPY - Se utiliza para copiar datos de un lado a otro
REQUEST - Pide información a otra página y la devuelve
*/
//ahora todas nuestras varialbles de procesos van a pasar por un process.env
/* Todos los middlewares se definen antes de una ruta */

require('dotenv').config(); //se puede configurar un path por si el .env no esta al mismo nivel que el index
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();

let file;
const loadFile = () => file = JSON.parse(fs.readFileSync(process.env.DB, 'utf-8'));
const saveFile = () => file = fs.readFileSync(process.env.DB, JSON.stringify(file));

app.use(bodyParser.json({limit: '20MB'}));
app.use(bodyParser.urlencoded({}));

app.get('/',(req, res, next) => {
    /*
    req
    - Params - parametros de url > localhost:2000/api/usuarios/:id, reg.params.id 
    - Query - parametros de la url pero por query params, localhost:2000/api/usuarios?id:nuestra-id, req.query.id
    - Body - Caso de que sea post y pust, req.body
    
    res
    - res.status (200,204,403); res.end(); res.sendStatus(200,204,403);
    - res.send();

    next (Continuar con nuestra ejecución)
    - app.get('/sincronizar', preSalvadoDatos, trabajodeDatos);
    - preSalvadoDatos(req, res, next) => {.... se trabajan los datos pre guardados... next();}
    - trabajodeDatos(req, res, next) => {... trabajar datos... res.send();}
    */

    loadFile();
    res.send(file);
});
app.get('/query', (req, res, next) => {res.send(req.query.id)});
app.get('/:id', (req, res, next) => {
    loadFile();
    const result = file.find(obj => parseInt(obj._id) === parseInt(req.params.id));
    res.send(result)
});
app.post('/:id', (req, res, next) => {
    loadFile();
    const result = file.find(obj => parseInt(obj._id) === parseInt(req.params.id));
    res.send(result)
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));