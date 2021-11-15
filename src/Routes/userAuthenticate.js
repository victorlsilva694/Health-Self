const express = require('express');
const routers = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const passport = require('passport');
const UsersModel = require("../Model/userModel");
const DiarioModel = require("../Model/Diario");

routers.get('/home', (req,res,next) => {

    res.render('user/dashboard', {
        User: req.user
    });
})

routers.get('/diario', (req,res,next) => {

    res.render('user/Diario', {
        User: req.user
    });
})
routers.post('/diario/env', (req,res,next) => {

    const {id, title, content} = req.body;

    DiarioModel.create({
        title: title,
        body: content,
        user_id: id,
    }).then(() => {
        res.redirect('/user/home');
    })

    console.log(id, title, content);
})

routers.get('/diario/posts', async (req, res, next) => {
    /*
        const query = await DiarioModel.findAll({where: {user_id: req.user.id}})
        console.log(query)
    */
    res.render('user/messagesDiario', {
        User: req.user,
        Diarios: await DiarioModel.findAll({where: {user_id: req.user.id}})
    });
})


routers.get('/deficienteVisual', (req,res,next) => {

    res.render('user/Deficientes/DeficientesVisuais', {
        User: req.user
    });
})

routers.get('/ansiedade', (req, res, next) => {
    res.render('user/psiquiatria/ansiedade', {
        User: req.user
    });
})

routers.get('/depressao', (req, res, next) => {
    res.render('user/psiquiatria/depressao', {
        User: req.user
    });
})

module.exports = routers;
