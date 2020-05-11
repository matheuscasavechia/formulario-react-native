const express = require('express');
const RhController = require('./controllers/RhController');
const FuncionariosController = require('./controllers/FuncionariosController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.get('/perfil', PerfilController.index);

routes.post('/sessoes', SessaoController.create);

routes.get('/rh', RhController.index);
routes.post('/rh', RhController.create);

routes.get('/funcionarios', FuncionariosController.index);
routes.post('/funcionarios', FuncionariosController.create);
routes.put('/funcionarios', FuncionariosController.put);
routes.delete('/funcionarios/:id', FuncionariosController.delete);



module.exports = routes;