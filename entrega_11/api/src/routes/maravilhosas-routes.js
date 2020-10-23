const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')

// @route GET maravilhosas
// @desc Mostra todo json das maravilhosas
// @access Public 
// @endpoint http://localhost:porta/maravilhosas
//get /maravilhosas
router.get('/maravilhosas', controller.getMaravilhosas)

//post /maravilhosas
router.post('/maravilhosas/add', controller.addMaravilhosa)

//get /maravilhosas/id
router.get('/maravilhosas/:id', controller.getMaravilhosaById)

//put /maravilhosas/id
router.put('/maravilhosas/:id', controller.updateMaravilhosa)

//delete /maravilhosas/id
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;

// @route Patch games
// @desc Atualiza parte das informações do game por ID
// @access Public 
// @endpoint http://localhost:porta/jogos/:id

//router.patch('/jogos/:id', cors(), controller.updatePatch)