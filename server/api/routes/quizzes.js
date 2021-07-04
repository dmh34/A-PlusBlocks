const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();

const controller = require("../../controllers");

router.get('/:id', (req, res, next) => {
    //controller.quizController.findAll(req, res);
})

router.post('/create', (req, res, next) => {
    //controller.quizController.add(req,res);
})

router.delete('/:quizid', (req, res, next) => {
    //controller.quizController.delete(req, res);
})

router.put('/quizid'(req, res, next)=> {
    //controler.quizController.update(req,res);
})

module.exports = router;

