/* 
HTTP basicos de una REST
GET -se utiliza para traer datos
POST - Se utiliza para crear datos
PUT - Se utiliza para modificar datos
DELETE - Se utiliza para borrar datos

COPY - Se utiliza para copiar datos de un lado a otro
REQUEST - Pide información a otra página y la devuelve
*/

const express = require('express');
const app = express();

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

    res.send('Hola Mundo');
});
app.get('/query', (req, res, next) => {res.send(req.query.id)});
//app.get('/:id', (req, res, next) => {res.send(req.params.id)});
app.listen(8888, () => console.log('Runing on port 8888'));

