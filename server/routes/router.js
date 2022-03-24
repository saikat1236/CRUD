const express = require("express");
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/',services.homeRoutes);

route.get('/all_user',services.all_user);
route.get('/all_user2',services.all_user2);


route.get('/add_user',services.add_user);
route.get('/form',services.form);

route.get('/sorry',services.output);

route.get('/update_user',services.update_user);

//api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

// 2nd api
route.post('/api/users2',controller.create);
route.get('/api/users2',controller.find);
route.put('/api/users2/:id',controller.update);
route.delete('/api/users2/:id',controller.delete);

module.exports = route