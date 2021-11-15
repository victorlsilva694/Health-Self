const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const passport = require('passport');
const UsersModel = require("../Model/userModel")
require('../config/auth')(passport)


router.get('/', (req, res, next) => {
    res.render('home');
});

router.get('/login', (req, res, next) => {
    res.render('login');
})


router.get('/register', (req, res, next) => {
    res.render('register');
})

router.post('/login/Auth', (req, res, next) => {
    
    let { email, password } = req.body;

    passport.authenticate("local", {
        successRedirect: '/user/home',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});


router.post('/register/env', (req, res, next) => {

    const { name, lastname, email, password } = req.body;

    if (name !== '' && lastname !== '' && email !== '' && password !== '') {

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);

        UsersModel.create({
            name: name,
            lastname: lastname,
            email: email,
            password: hash
        }).then(() => {
            res.redirect('/login');
        })

    }
    else {
        res.redirect('/Register');
    }
})


module.exports = router;